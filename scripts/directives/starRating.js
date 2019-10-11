myAngularApp.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<div class="rating-inner"><ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>' +
            '<p>{{photoName}}</p></div>',
        scope: {
            ratingValue: '=',
            max: '=',
            photoName: '=',
        },
        link: function (scope, elem, attrs) {

            var updateStars = function (rate) {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < rate
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                updateStars(scope.ratingValue);
            };

            updateStars(scope.ratingValue);
        }
    }
});