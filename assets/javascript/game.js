// Create variables to keep track the number 
// of times the user wins and losses
var wins = 0;
var losses = 0;
//Keep track of Guesses left
var guessedLetters = [];
//We define the maximun guesses that the user has each time
var maxGuess = 10;
var guessLeft = maxGuess;
//Letter array to select randomly for the computer
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", 
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z"];
var randomNumber = 0;
document.querySelector("#dGuessLeft").innerHTML = "Guesses Left: " + guessLeft;

function resetDisplay(){
	guessedLetters = [];
	guessLeft = maxGuess;				
	document.querySelector("#dGuessLeft").innerHTML = "Guesses Left: " + guessLeft;
	document.querySelector("#dGuessed").innerHTML = "Your guesses so far: " + guessedLetters;
	

}
document.onkeyup = function(event){
	//We generate a random number between 0 and the lenght 
	//of the array of letter
	randomNumber = Math.floor(Math.random()*letters.length); 
	var pickedLetter = letters[randomNumber];
	var key = event.key;

	if (guessedLetters.length < maxGuess){
		guessedLetters.push(key.toUpperCase());
		document.querySelector("#dGuessed").innerHTML = "Your guesses so far: " + guessedLetters;
		guessLeft--;
		document.querySelector("#dGuessLeft").innerHTML = "Guesses Left: " + guessLeft;

		if (key.toUpperCase() === pickedLetter){
			wins++;
			document.querySelector("#dWins").innerHTML = "Wins: " + wins;
			resetDisplay();
		}
		else{
			if(guessLeft == 0){
				losses++;
				document.querySelector("#dLosses").innerHTML = "Losses: " + losses;
				resetDisplay();
			}	
		}
	}
}