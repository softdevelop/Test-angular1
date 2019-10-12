myAngularApp.directive('photoList', function () {
    return {
        restrict: 'A',
        template: '<div class="photo" ng-repeat="photo in photoArray">' +
            '<img ng-src="{{photo.src}}" class="img-responsive" alt="{{photo.src}}"/>' +
            '<div star-rating photo-id="photo.id" max="maxRating" photo-name="photo.name" class="rating-container"></div>' +
            '</div>',
        scope: {
            photoArray: '=',
            maxRating: '=',
        },
        link: function (scope, elem, attrs) {
        }
    }
});