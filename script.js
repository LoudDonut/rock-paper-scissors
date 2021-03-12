//Function that randomly returns either Rock Paper or Scissors
function computerPlay() {
    //Calculate random number between 0 and 2 and store it
    let randNumber = Math.floor(Math.random() * 3);
    //if number = 0 then rock etc...
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
    //return value
}
    //ASSIGN STRING TO VARIABLE

function playRound(playerSelection, computerSelection) {
    //Check the input so it is the input we want
    //a-convert player selection to lowercase
    playerSelection = playerSelection.toLower();
    //b-Check input to be a string of either rock paper or scissors
    if (playerSelection === 'rock' ||
        playerSelection === 'paper' ||
        playerSelection === 'scissors') {
            //Match user input vs comp input
            if (playerSelection === computerSelection) {
                console.log("It's a tie!")
            }
            //Returns a string naming the winner on the console
    }
    else {
        // If its not then ask for correct input
        console.log("Please choose either rock, paper or scissors");
    }
}

