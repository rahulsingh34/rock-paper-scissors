//Options for computer to play
let textArray = ['Rock', 'Paper', 'Scissors'];

//Function that choses a random number within the length of the array and returns either Rock, Paper or Scissors 
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

//Function for playing a single round and deciding who won
function playRound(playerSelection, computerSelection) {
    //Reassigning the variable "playerSelection" to be case insensitive and match the computer's selection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return "You Win! " + playerSelection + " beats " + computerSelection; 
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return "You Lose! " + computerSelection + " beats " + playerSelection; 
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else {
        return "It's a draw!";
    }
}

//Function to ask player for their selection through a prompt
function playerPlay() {
    playerSelection = window.prompt('Rock, Paper or Scissors?'); 
    return playerSelection;
}