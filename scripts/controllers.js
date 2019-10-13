// Define controller and the objects need to reference.
myAngularApp.controller('appController', ['$scope', function ($scope) {
	$scope.tab = 1;
    $scope.photoNumber = null;
    $scope.photoOrderBy = '';
    $scope.maxRating = 5;

    $scope.setTab = function(newTab){
      	$scope.tab = newTab;
      	switch($scope.tab) {
			case 2:
			    $scope.photoNumber = -1;
			    $scope.photoOrderBy = 'name';
				break;
			case 3:
			    $scope.photoNumber = 6;
			    $scope.photoOrderBy = ['-rating', 'name'];
				break;
			default:
			    $scope.photoNumber = null;
			    $scope.photoOrderBy = '';
				break;
		}
    };

    $scope.isSet = function(tabNum){
      	return $scope.tab === tabNum;
    };
}]);
