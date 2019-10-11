// Define controller and the objects need to reference.
myAngularApp.controller('appController', ['$scope', 'orderByFilter', function ($scope, orderBy) {
	$scope.tab = 1;

    $scope.photos = orderBy(photos, 'name');

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
}]);
