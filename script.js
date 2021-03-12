//Function that randomly returns either Rock Paper or Scissors
function computerPlay() {
    //Calculate random number between 0 and 2 and store it
    let randNumber = Math.floor(Math.random() * 3);
    //if number = 0 then rock etc...
    if (randNumber === 0) {
        return "Rock";
    }
    else if (randNumber === 1) {
        return "Paper";
    }
    else if (randNumber === 2) {
        return "Scissors";
    }
    else {
        return "Something went wrong";
    }
    //return value
}
    //ASSIGN STRING TO VARIABLE

function playRound(playerSelection, computerSelection) {
    //2-Assign input to a variable
    //3-Check input to be a string of either rock paper or scissors
    //4-Determine computer input by randomizing a number/n
    //4-Between 0 and 2
    //5- Assigning that number to a string of rock paper scissors
    //6-Match input against computer input
    //6a-Set rules for all possible outcomes
    //6b-If rock vs paper then paper wins etc....
    //6c-Output the winner and the loser
}

computerPick = computerPlay();
console.log(computerPick);