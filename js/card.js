function CardController($scope) {

  	$scope.hero = {
	    name: "Drallieiv le fourbe",
	    lvl: 4,
	    class: (["Enutrof", "Dev"]).join(" - "),
	    init: 7,
	    MP: 3,
	    HP: 8,
	    AP: 6,
	    face: {url:"http://krosmaster.herazade.com/HG/uploaded/MaliBouh.png", zoom:"136", offX:"-23", offY:"5"},
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