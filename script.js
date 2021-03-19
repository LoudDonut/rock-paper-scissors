//Function that randomly returns either Rock Paper or Scissors
function computerPlay() {
	//Calculate random number between 0 and 2 and store it
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

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerPlay();
	if (playerSelection === 'scissor') {
		playerSelection = 'scissors';
	}
	if (playerSelection === 'rock' ||
		playerSelection === 'paper' ||
		playerSelection === 'scissors') {
			//Match user input vs comp input
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
	else {
		console.log("Please choose either rock, paper or scissors");
	}
}

const buttons = document.querySelectorAll('#buttons');
const resultContainer = document.querySelector('#resultContainer');

buttons.forEach((button) => {
	button.addEventListener("click", function(e) {
		let winner = playRound(e.target.id);
		const declareVictor = document.querySelector('#declareVictor');
		if (winner === "player wins") {
			declareVictor.textContent = "Player wins!";
		}
		else if (winner === "computer wins") {
			declareVictor.textContent = "You lost!";
		}
		else {
			declareVictor.textContent = "Tie!";
		}
	});
});