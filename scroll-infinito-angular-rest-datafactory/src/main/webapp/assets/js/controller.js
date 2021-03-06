AppPeople.controller("PeopleController", function($scope, $people) {
	$scope.data = [];
	$scope.page = {ini : 0, end : 50, increment: 30};
	$scope.busy = false;
	
	$scope.search = function() {
		$scope.busy = true;
		$scope.promise = $people.query({ini:$scope.page.ini, end: $scope.page.end}, function(response) { 
			$scope.loadPeople(response);
			$scope.incrementPageNumber();
			$scope.busy = false;
		}).$promise;
	};
	
	$scope.incrementPageNumber = function(){
		$scope.page.ini  = $scope.page.end;
		$scope.page.end += $scope.page.increment;
	};
	
	$scope.loadPeople = function(people){
		angular.forEach(people, function(item, i) {
			$scope.data.push(item);
		});
	};
});