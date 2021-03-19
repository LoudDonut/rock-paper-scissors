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
    if (playerSelection === 'scissor') {
        playerSelection = 'scissors';
    }
    if (playerSelection === 'rock' ||
        playerSelection === 'paper' ||
        playerSelection === 'scissors') {
            //Match user input vs comp input
            if (playerSelection === "rock" &&
                computerSelection === "scissors") {
                return "You win! Computer loses!";
            }
            else if (playerSelection === "paper" &&
                computerSelection === "rock") {
                return "You win! Computer loses!";
            }
            else if (playerSelection === "scissors" &&
                computerSelection === "paper") {
                return "You win! Computer loses!";
            }
            else if (playerSelection === computerSelection) {
                return "It's a tie!";
            }
            else {
                return "You lost! The computer wins!";
            }
    }
    else {
        console.log("Please choose either rock, paper or scissors");
    }
}

function game() {
    for (i = 0; i < 5; i++) { //Round counter
        let inputUser = window.prompt('Rock, paper or scissors?');
        // when inputUser is not rock,paper or scissors pick a
        // random one for inputUser
        if (inputUser !== "rock" && inputUser !== "paper" &&
            inputUser !== "scissors") {
                inputUser = computerPlay();
        }
        let result;
        result = playRound(inputUser, computerPlay());
        alert(result);
    }
}

game();