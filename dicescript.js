function getdiceroll() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;

	document.querySelector(".dice1").setAttribute("src", "dice-" + randomNumber1 + ".png"); 
  	document.querySelector(".dice2").setAttribute("src", "dice-" + randomNumber2 + ".png");

	if (randomNumber1 == randomNumber2) { 
		 document.querySelector("h1").innerHTML = ("Draw!"); 
	 } 
		  
	else if (randomNumber1 < randomNumber2) { 
		document.querySelector("h1").innerHTML = (" PLAYER 2 WINS!"); 
	} 
		  
	else { 
		document.querySelector("h1").innerHTML = ("PLAYER 1 WINS!");
	}
}
