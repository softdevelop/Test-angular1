// Define controller and the objects need to reference.
myAngularApp.controller('appController', ['$scope', 'photoService', 'orderByFilter', function ($scope, photoService, orderBy) {
	$scope.tab = 1;

    $scope.photos = orderBy(photoService.getPhotoArray(), 'name');
    
    $scope.rating = {
    	current: 0,
    	max: 5
    };

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);
