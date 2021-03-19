function computerPlay() { //returns a random choice for playRound
	let randNumber = Math.floor(Math.random() * 3);
	if (randNumber === 0) {
		return "rock";
	}
	else if (randNumber === 1) {
		return "paper";
	}
	else if (randNumber === 2) {
		return "scissors";
	}
	else {
		console.log("Something went wrong in computerPlay()");
	}
}

function playRound(playerSelection) {
	computerSelection = computerPlay();
	if (playerSelection === "rock" &&
		computerSelection === "scissors") {
		return "player wins";
	}
	else if (playerSelection === "paper" &&
		computerSelection === "rock") {
		return "player wins";
	}
	else if (playerSelection === "scissors" &&
		computerSelection === "paper") {
		return "player wins";
	}
	else if (playerSelection === computerSelection) {
		return "tie";
	}
	else {
		return "computer wins";
	}
}

function displayScore() {
	
}

//MAIN PROGRAM

const buttons = document.querySelectorAll('#buttons');
const middleContainer = document.querySelector('#middleContainer');

buttons.forEach((button) => {
	button.addEventListener("click", function(e) {
		let playerWins = 0;
		let computerWins = 0;
		let winner = playRound(e.target.id);
		const declareVictor = document.querySelector('#declareVictor');
		if (winner === "player wins") {
			declareVictor.textContent = "Player wins!";
			playerWins += 1;
		}
		else if (winner === "computer wins") {
			declareVictor.textContent = "You lost!";
			computerWins += 1;
		}
		else {
			declareVictor.textContent = "Tie!";
		}
	});
});