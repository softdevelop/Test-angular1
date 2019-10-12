// Define controller and the objects need to reference.
myAngularApp.controller('appController', ['$scope', 'photoService', 'orderByFilter', function ($scope, photoService, orderBy) {
	$scope.tab = 1;
    $scope.maxRating = 5;
    $scope.photos = orderBy(photoService.getPhotoArray(), 'name');

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);
