//Win Percent Variables
var wins = 0;
var games = 0;
var win_percent = 0;
//Function to Compare the Results
var compare = function(choice1, choice2) {
	if (choice1 === choice2) {
		return "It's a tie!";
	}
	else if (choice1 === 'rock') {
		if (choice2 === 'scissors') {
			wins = wins +1;
			return "You won!";
		}
		else {
			return "You lost!";
		}
	}
	else if (choice1 === 'paper') {
		if (choice2 === 'rock') {
			wins = wins +1;		
			return 'You won!';
		}
		else {
			return 'You lost!';
		}
	}
	else if (choice1 === 'scissors') {
		if (choice2 === 'paper') {
			wins = wins +1;
			return 'You won!';
		}
		else {
			return 'You lost!';
		}
	}
};

//Function to Rate
var rate = function() {
	if (win_percent <= 35) {
		return "Yikes! You've only gotten " + win_percent + "% of them right! :(";
	}
	else if (win_percent <= 60) {
		return "Okay. Well, you managed to get " + win_percent + "% of them right.";
	}
	else if (win_percent <= 90) {
		return "Nice! You beat the machine " + win_percent + "% of the time.";
	}
	else if (win_percent <=100) {
		return "Holy smokes! You've nailed " + win_percent + "% of these games!";
	}
}
//Choosing RPS Results
var userChoice;
var choices = document.getElementsByClassName('choice');

var decideChoice = function() {
	//Setting User Choice
	var inner = this.innerHTML.toLowerCase();
	userChoice = inner;
	//Setting Computer Choice
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = 'rock';
	}
	else if (computerChoice <= 0.67) {
		computerChoice = 'paper';
	}
	else if (computerChoice <= 1) {
		computerChoice = 'scissors';
	}
	//Adding User Choice
	var user_choice = document.createTextNode('You chose: ' + userChoice);
	var user_area = document.getElementById('user');
	while (user_area.hasChildNodes()) {
		user_area.removeChild(user_area.firstChild);
	}
	user_area.appendChild(user_choice);
	//Adding Computer Choice
	var comp_choice = document.createTextNode('The computer chose: ' + computerChoice);
	var comp_area = document.getElementById('computer');
	while (comp_area.hasChildNodes()) {
		comp_area.removeChild(comp_area.firstChild);
	}
	comp_area.appendChild(comp_choice);
	//Adding Result
	var result = document.createTextNode(compare(userChoice, computerChoice));
	var result_area = document.getElementById('result')
	while (result_area.hasChildNodes()) {
		result_area.removeChild(result_area.firstChild);
	}
	result_area.appendChild(result);
	//Increasing Game Count
	games = games + 1;
	//Calculating Percent
	win_percent = Math.round((wins/games)*100);
	//Updating Scoreboard
	var score = document.createTextNode("You've won " + wins + " out of " + games + " games against the computer. ");
	var rating = document.createTextNode(rate());
	var scoreboard_area = document.getElementById('scoreboard');
	while (scoreboard_area.hasChildNodes()) {
		scoreboard_area.removeChild(scoreboard_area.firstChild);
	}
	scoreboard_area.appendChild(score);
	scoreboard_area.appendChild(rating);
};

for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', decideChoice, false);
}