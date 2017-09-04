function showDiv(menuID){
	
	switch(menuID){
		
		case 1:
		
			document.getElementById("How_to_Play").style.display = 'flex';
			break;
			
		case 2:
		
			document.getElementById("Developers").style.display = 'flex';
			break;
			
		case 3:
			
			document.getElementById("About").style.display = 'flex';
			break;
			
		default:
			break;
	}
}