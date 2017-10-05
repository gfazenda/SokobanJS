function showDiv(menuID){
	
	switch(menuID){
		
		case 1:
		
			if(document.getElementById("How_to_Play").style.display != 'flex'){
				document.getElementById("How_to_Play").style.display = 'flex';
			}
			else{
				document.getElementById("How_to_Play").style.display = 'none';
			}
			break;
			
		case 2:
		
			if(document.getElementById("Developers").style.display != 'flex'){
				document.getElementById("Developers").style.display = 'flex';
			}
			else{
				document.getElementById("Developers").style.display = 'none';
			}
			break;
			
		case 3:
			
			if(document.getElementById("About").style.display != 'flex'){
				document.getElementById("About").style.display = 'flex';
			}
			else{
				document.getElementById("About").style.display = 'none';
			}
			break;
			
		default:
			break;
	}
}

function changeWindow(pageNumber){


		if(pageNumber == 1){
			//window.location.href = "Sokoban.html";
			//$location.path('/HowToPlay');
		}

		else if(pageNumber == 2){
			//window.location.href = "HowToPlay.html";
		}
		else if(pageNumber == 3){
			//window.location.href = "Developers.html";
		}
		else if(pageNumber == 4){
			//window.location.href = "About.html";
		}
	// window.location.href = "HowToPlay.html";
	// console.log("It's working?");
}