 var app = angular.module('myApp', []);

 var x = 0;
 var blue = {
		/*placeholder*/
			name:'jeff',
			id: 'hoothoot',
			move1:'Growl',
			move2:'Tackle',
			move3:'--',
			move4:'--',
			hp:'19', 
			hpmax:'20'
			};
var red = {
		/*placeholder*/
			id: 'ratata',
			name:'ratata',
			hp:'10', 
			hpmax:'20'
			};

app.controller('myCtrl', function($scope) {
	/* actual inits */
	$scope.mqueue = [];
	$scope.fight = false;
	$scope.menu = true;
	$scope.message = '';
	/*placeholder inits*/
	$scope.redpkmn = "hoothoot";
	$scope.bluepkmn = "ratata";
	$scope.redlv = "12";
	$scope.bluelv = "2";
	$scope.red = red;
	$scope.blue = blue;
	$scope.Fight = function(){
		$scope.fight = !$scope.fight;
	}
	
	$scope.move1 = function(){
		$scope.fight = false;
		$scope.menu = false;
		$scope.message = blue.name + ' used ' + blue.move1;
		$scope.calc(blue.move1)
	}
	$scope.move2 = function(){
		$scope.fight = false;
		$scope.menu = false;
		$scope.message = blue.name + ' used ' + blue.move2;
		$scope.calc(blue.move2)
	}
	$scope.move3 = function(){
		//dummy
	}
	$scope.move4 = function(){
		//dummy
	}
	$scope.calc = function(move){
		$scope.mqueue.push('BUFFER');
			if (move == 'Tackle'){
				math.random();
				$scope.mqueue.push(blue.name + ' missed');
				}
			if (move =='Growl'){
				$scope.mqueue.push("but it didn't affect enemy "+ red.name);
				}	
			$scope.mqueue.push('END');
		}
	$scope.advance = function(){
		if ($scope.mqueue[x]!='END'){
		$scope.message = $scope.mqueue[x];
		x++;
		}
		else{
			x = 0;
			$scope.mqueue = [];
			$scope.message = '';
			$scope.menu = true;
		}
	}
	});