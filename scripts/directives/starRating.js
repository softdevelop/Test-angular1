myAngularApp.directive('starRating', function (ratingDataService) {
    return {
        restrict: 'A',
        template: '<div class="rating-inner">' +
            '<p>{{photoName}}</p>' +
            '<ul class="rating" ng-hide="isHideVote()">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="vote($index)" ng-mouseover="mouseover($index)" ng-mouseout="mouseout()">' +
            '\u2605' +
            '</li>' +
            '</ul>' +
            '<button ng-click="unvote()" ng-hide="isHideUnvote()">Unvote</button>' +
            '</div>',
        scope: {
            photoId: '=',
            max: '=',
            photoName: '=',
        },
        link: function (scope, elem, attrs) {
            scope.ratingValue = ratingDataService.get(scope.photoId, 0);

            var updateStars = function (rate) {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < rate
                    });
                }
            };

            scope.mouseover = function (index) {
                console.log('mouseover');
            };

            scope.mouseout = function () {
                console.log('mouseout');
            };

            scope.vote = function (index) {
                scope.ratingValue = index + 1;
                updateStars(scope.ratingValue);
                ratingDataService.set(scope.photoId, scope.ratingValue);
            };

            scope.unvote = function () {
                scope.ratingValue = 0;
                updateStars(scope.ratingValue);
                ratingDataService.remove(scope.photoId);
            };

            scope.isHideVote = function () {
                var total = ratingDataService.getTotal();
                return scope.ratingValue == 0 && total >= 10;
            };

            scope.isHideUnvote = function () {
                return scope.ratingValue == 0;
            };

            scope.$watch("ratingValue",function(newValue,oldValue) {
                //update photoArray when vote or unvote
                scope.$parent.updateArray();
            });

            updateStars(scope.ratingValue);
        }
    }
});