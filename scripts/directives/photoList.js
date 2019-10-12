myAngularApp.directive('photoList', ['photoService', 'orderByFilter', 'ratingDataService', function (photoService, orderBy, ratingDataService, RATING_DATA_STORAGE_NAME) {
    return {
        restrict: 'A',
        template: '<div class="photo" ng-repeat="photo in photoArray">' +
            '<img ng-src="{{photo.src}}" class="img-responsive" alt="{{photo.src}}"/>' +
            '<div star-rating photo-id="photo.id" max="maxRating" photo-name="photo.name" class="rating-container"></div>' +
            '</div>',
        scope: {
            num: '=',
            orderProperty: '=',
            maxRating: '=',
            reverse: '='
        },
        link: function (scope, elem, attrs) {
            scope.updateArray = function () {
                scope.photoArray = photoService.getPhotoArray();
                scope.ratingData = ratingDataService.getObject(RATING_DATA_STORAGE_NAME);
                angular.forEach(scope.photoArray, function(value, key) {
                    if (typeof scope.ratingData[value.id] != 'undefined' && scope.ratingData[value.id] > 0) {
                        scope.photoArray[key]['rating'] = scope.ratingData[value.id];
                    } else {
                        scope.photoArray[key]['rating'] = 0;
                    }
                });
                if (scope.orderProperty.length > 0) {
                    scope.photoArray = orderBy(scope.photoArray, scope.orderProperty, scope.reverse);
                }
                if (scope.num > 0) {
                    scope.photoArray = scope.photoArray.splice(0, scope.num);
                }
                scope.photoArray = scope.photoArray;
            };

            scope.updateArray(scope.photoArray);
        }
    }
}]);