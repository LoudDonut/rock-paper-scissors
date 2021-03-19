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

function displayPlayerScore(points) {
	const playerScore = document.querySelector("#playerScore");
	playerScore.textContent = "Score: " + points;
}

function displayComputerScore(points) {
	const computerScore = document.querySelector("#computerScore");
	computerScore.textContent = "Score: " + points;
}

function displayRounds(rounds) {
	const roundCounter = document.querySelector("#roundCounter");
	roundCounter.textContent = "Rounds: " + rounds;
}

function calcAndDisplay(winner) {
	if (winner === "player") {
		playerScore += 1;
		rounds -= 1;
		displayPlayerScore(playerScore);
		displayRounds(rounds);
	}
	else {
		computerWins += 1;
		rounds -= 1;
		displayComputerScore(computerWins);
		displayRounds(rounds);
	}
}

//MAIN PROGRAM

const buttons = document.querySelectorAll('#buttons');
const middleContainer = document.querySelector('#middleContainer');
let playerScore = 0;
let computerWins = 0;
let rounds = 5;

buttons.forEach((button) => {
	button.addEventListener("click", function(e) {
		let winner = playRound(e.target.id);
		const declareVictor = document.querySelector('#declareVictor');
		if (rounds > 0) {
			if (rounds === 1) {
				if (playerScore > computerWins) {
					declareVictor.textContent = "PLAYER WINS THE GAME";
					calcAndDisplay("player");
				}
				else {
					declareVictor.textContent = "COMPUTER WINS THE GAME";
					calcAndDisplay("computer");
				}
			}
			else if (winner === "player wins") {
				declareVictor.textContent = "Player wins!";
				calcAndDisplay("player");
			}
			else if (winner === "computer wins") {
				declareVictor.textContent = "You lost!";
				calcAndDisplay("computer");
			}
			else {
				declareVictor.textContent = "Tie!"; //doesnt count as a round
			}
		}
	});
});