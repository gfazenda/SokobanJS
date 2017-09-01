var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
		//0 = empty
		//1 = player
		//2 = box
		//3 = wall
		$scope.columns = 10;
		$scope.rows = 10;
		$scope.scene = [
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0
		];
		
		$scope.playerPosition = {x: 0, y:0};
		
		$scope.StartMatrix = function(){
			// for (i = 0; i < $scope.rows; i++) {				
			   // $scope.scene[i] = new Array($scope.columns);
			// }
			
			// for (x = 0; x < $scope.columns; x++) {
				// for (y = 0; y < $scope.rows; y++) {
					// $scope.scene[x][y] = 'e';
					// console.log($scope.scene[x][y]);
				// }
			// }
			// $scope.scene[1][0] = 'b';
			$scope.scene[$scope.GetIndex(4,4)] = 2;
			
			//$scope.MovePlayer(0); 
			
			//start player position:
			$scope.playerPosition = {x: 2, y:2};
			$scope.scene[$scope.GetIndex(2,2)] = 1;

			//walls:
			$scope.scene[$scope.GetIndex(0,9)] = 3;
			$scope.scene[$scope.GetIndex(1,9)] = 3;
			$scope.scene[$scope.GetIndex(2,9)] = 3;
			$scope.scene[$scope.GetIndex(3,9)] = 3;
			$scope.scene[$scope.GetIndex(4,9)] = 3;
			$scope.scene[$scope.GetIndex(5,9)] = 3;
			$scope.scene[$scope.GetIndex(6,9)] = 3;
			$scope.scene[$scope.GetIndex(7,9)] = 3;
			$scope.scene[$scope.GetIndex(8,9)] = 3;
			$scope.scene[$scope.GetIndex(9,9)] = 3;
			
			$scope.scene[$scope.GetIndex(9,6)] = 3;
			$scope.scene[$scope.GetIndex(9,7)] = 3;
			$scope.scene[$scope.GetIndex(9,8)] = 3;
			$scope.scene[$scope.GetIndex(9,9)] = 3;
			
			$scope.scene[$scope.GetIndex(0,1)] = 3;
			$scope.scene[$scope.GetIndex(0,2)] = 3;
			$scope.scene[$scope.GetIndex(0,3)] = 3;
			$scope.scene[$scope.GetIndex(0,4)] = 3;
			$scope.scene[$scope.GetIndex(0,5)] = 3;
			$scope.scene[$scope.GetIndex(0,6)] = 3;
			$scope.scene[$scope.GetIndex(0,7)] = 3;
			$scope.scene[$scope.GetIndex(0,8)] = 3;
			$scope.scene[$scope.GetIndex(0,9)] = 3;
			
			$scope.scene[$scope.GetIndex(1,3)] = 3;
			$scope.scene[$scope.GetIndex(2,3)] = 3;
			
			$scope.scene[$scope.GetIndex(1,1)] = 3;
			$scope.scene[$scope.GetIndex(2,1)] = 3;
			
			$scope.scene[$scope.GetIndex(2,0)] = 3;
			$scope.scene[$scope.GetIndex(3,0)] = 3;
			$scope.scene[$scope.GetIndex(4,0)] = 3;
			$scope.scene[$scope.GetIndex(5,0)] = 3;
			$scope.scene[$scope.GetIndex(6,0)] = 3;
			$scope.scene[$scope.GetIndex(7,0)] = 3;
			$scope.scene[$scope.GetIndex(8,0)] = 3;
			
			$scope.scene[$scope.GetIndex(8,1)] = 3;
			$scope.scene[$scope.GetIndex(8,2)] = 3;
			$scope.scene[$scope.GetIndex(8,3)] = 3;
			$scope.scene[$scope.GetIndex(8,4)] = 3;
			$scope.scene[$scope.GetIndex(8,5)] = 3;
			$scope.scene[$scope.GetIndex(8,6)] = 3;
			
			$scope.scene[$scope.GetIndex(2,4)] = 3;
			$scope.scene[$scope.GetIndex(2,5)] = 3;
			
			$scope.scene[$scope.GetIndex(3,4)] = 3;

		}
		
		$scope.GetIndex = function(x,y){
			return (x + y * $scope.rows);
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
					// if($scope.scene[playerPos.x][playerPos.y] == 'e'){					
						// $scope.scene[$scope.playerPosition.x][$scope.playerPosition.y] = 'e';	
						// $scope.playerPosition = playerPos;
						// $scope.scene[$scope.playerPosition.x][$scope.playerPosition.y] = 'p';
					// }
					// else if($scope.scene[playerPos.x][playerPos.y] == 'b' && $scope.MoveBox(dir,playerPos)){					
						// $scope.scene[$scope.playerPosition.x][$scope.playerPosition.y] = 'e';	
						// $scope.playerPosition = playerPos;
						// $scope.scene[$scope.playerPosition.x][$scope.playerPosition.y] = 'p';
					// }
					console.log($scope.GetIndex(playerPos.x,playerPos.y));
					console.log($scope.GetIndex(5,5));
					if($scope.scene[$scope.GetIndex(playerPos.x,playerPos.y)] == 0){					
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 0;	
						$scope.playerPosition = playerPos;
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 1;
					}
					else if($scope.scene[$scope.GetIndex(playerPos.x,playerPos.y)] == 'b' && $scope.MoveBox(dir,playerPos)){					
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 0;	
						$scope.playerPosition = playerPos;
						$scope.scene[$scope.GetIndex($scope.playerPosition.x,$scope.playerPosition.y)] = 1;
					}					
			}
			
			console.log($scope.playerPosition);
		}
		
		$scope.MoveBox = function(dir, playerPosition){
			var position = Object.assign({},$scope.playerPosition);
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
					if($scope.scene[$scope.GetIndex(position.x,position.y)] == 0){
						console.log('moved box');
						$scope.scene[$scope.GetIndex(position.x,position.y)] = 2;
						return true;
					}					
			}
			return false;
		}
		
		
		
});