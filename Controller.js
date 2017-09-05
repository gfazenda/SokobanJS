var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
		//0 = empty
		//1 = player
		//2 = box
		//3 = wall
		//4 = target
		$scope.columns = 10;
		$scope.rows = 10;
		$scope.scene = [
		0,0,3,3,3,3,3,3,3,0,
		3,3,3,0,0,0,0,0,3,0,
		3,4,0,2,0,0,0,0,3,0,
		3,3,3,0,2,0,0,4,3,0,
		3,4,3,3,2,0,0,0,3,0,
		3,0,3,0,4,0,0,0,3,0,
		3,2,0,4,2,2,0,0,3,3,
		3,0,0,0,4,0,0,0,0,3,
		3,0,0,0,0,0,0,0,0,3,
		3,3,3,3,3,3,3,3,3,3
		];
		
		$scope.points = 0;
		$scope.playerPosition = {x: 0, y:0};
		$scope.targets = [];
		
		$scope.StartMatrix = function(){
			
			$scope.targets.push(new $scope.Coord(1,2));
			$scope.targets.push(new $scope.Coord(1,4));
			$scope.targets.push(new $scope.Coord(4,5));
			$scope.targets.push(new $scope.Coord(3,6));
			$scope.targets.push(new $scope.Coord(4,7));
			$scope.targets.push(new $scope.Coord(7,3));

			$scope.playerPosition = {x: 2, y:2};
			$scope.scene[$scope.GetIndex(2,2)] = 1;
		}
		$scope.GetIndex = function(x,y){
			return (x + y * $scope.rows);
		}

		$scope.Coord = function(x,y){
			this.x = x;
			this.y = y;
		}
		
		$scope.MovePlayer = function(dir){
			var playerPos = Object.assign({},$scope.playerPosition);
			
			switch(dir){
				case 0: //dir
					playerPos.x +=1;
				break;
				
				case 1: //esq
					playerPos.x -=1;
				break;
				
				case 2: //baixo
					playerPos.y +=1;
				break;
				
				case 3: //cima
					playerPos.y -=1;
				break;
			}
			
			if(playerPos.x >= 0 && playerPos.x < $scope.columns 
				&& playerPos.y >=0 && playerPos.y < $scope.rows){					
					if($scope.scene[$scope.GetIndex(playerPos.x,playerPos.y)] == 0 || $scope.scene[$scope.GetIndex(playerPos.x,playerPos.y)] == 4){					
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 0;	
						$scope.playerPosition = playerPos;
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 1;
					}
					else if($scope.scene[$scope.GetIndex(playerPos.x,playerPos.y)] == 2 && $scope.MoveBox(dir,playerPos)){					
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 0;	
						$scope.playerPosition = playerPos;
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 1;
					}	
					$scope.CheckTargets();				
			}
			
			console.log($scope.playerPosition);
		}
		
		$scope.MoveBox = function(dir, playerPos){
			var position = Object.assign({},playerPos);
			switch(dir){
				case 0: //dir
				position.x +=1;
				break;
				case 1: //esq
				position.x -=1;
				break;
				case 2: //baixo
				position.y +=1;
				break;
				case 3: //cima
				position.y -=1;
				break;
			}
			if(position.x >= 0 && position.x < $scope.columns 
				&& position.y >=0 && position.y < $scope.rows){							
					if($scope.scene[$scope.GetIndex(position.x,position.y)] == 0 || $scope.scene[$scope.GetIndex(position.x,position.y)] == 4){
						$scope.scene[$scope.GetIndex(position.x,position.y)] = 2;
						return true;
					}								
			}
			return false;
		}


		$scope.CheckTargets = function(){
			var tCount = $scope.targets.length;
			$scope.points = 0; 
			console.log('thing ' + tCount);
			for(i = 0; i < $scope.targets.length; i++){
				currentTarget = $scope.targets[i];
				if($scope.scene[$scope.GetIndex(currentTarget.x,currentTarget.y)] == 0){
					$scope.scene[$scope.GetIndex(currentTarget.x,currentTarget.y)] = 4;
				}else if ($scope.scene[$scope.GetIndex(currentTarget.x,currentTarget.y)] == 2){
					tCount -= 1;
					$scope.points++;
					if(tCount <= 0){
						console.log('YOU WON!!!!');
					}
				}
			}
		}
		
		$scope.ResetMatrix = function() {
			
			$scope.scene = [
			0,0,3,3,3,3,3,3,3,0,
			3,3,3,0,0,0,0,0,3,0,
			3,4,0,2,0,0,0,0,3,0,
			3,3,3,0,2,0,0,4,3,0,
			3,4,3,3,2,0,0,0,3,0,
			3,0,3,0,4,0,0,0,3,0,
			3,2,0,4,2,2,0,0,3,3,
			3,0,0,0,4,0,0,0,4,3,
			3,0,0,0,0,0,0,0,0,3,
			3,3,3,3,3,3,3,3,3,3
			];
			
			$scope.StartMatrix();
			$scope.points = 0;
			console.log("reseted");
		}

});