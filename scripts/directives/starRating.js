myAngularApp.directive('starRating', function (ratingDataService) {
    return {
        restrict: 'A',
        template: '<div class="rating-inner">' +
            '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="vote($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>' +
            '<p>{{photoName}}</p>' +
            '<button ng-click="unvote()">Unvote</button>' +
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

            updateStars(scope.ratingValue);
        }
    }
});