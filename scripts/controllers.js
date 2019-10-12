// Define controller and the objects need to reference.
myAngularApp.controller('appController', ['$scope', function ($scope) {
	$scope.tab = 1;
    $scope.maxRating = 5;

    $scope.setTab = function(newTab){
      	$scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      	return $scope.tab === tabNum;
    };
}]);
