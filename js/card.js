function CardController($scope) {

  	$scope.hero = {
	    name: "Drallieiv le fourbe",
	    lvl: 4,
	    class: (["Enutrof", "Dev"]).join(" - "),
	    init: 7,
	    face: {url:"http://127.0.0.1:8000/uploaded/MaliBouh.png", zoom:"136", offX:"-23", offY:"5"},
  	};

  	$scope.saveJson = function(){
  		$scope.jsonData = JSON.stringify($scope.hero);
  	}

  	$scope.loadJson = function(){
	  	$scope.hero = angular.copy(JSON.parse($scope.jsonData));
  	};

  	//End of Init
  	$scope.saveJson();
  /*
  $scope.name = 'Card Name';
  $scope.employee = {
    name: 'Joe the Manager',
    reports: [
      {name: 'John Smith'},
      {name: 'Mary Run'}
    ]
  };
  */
}