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

//Function to play a game of 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;

    //Round 1 choice selection
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    //Play 5 rounds
    for (let i = 0; i < 5; i++) {

        //Play the round and log it
        currentGame = playRound(playerSelection, computerSelection);
        console.log(currentGame);

        //Based on currentGame output, add to score to winner
        if (currentGame.includes("Win")) {
            playerScore++;
        }
        else if (currentGame.includes("Lose")) {
            computerScore++;
        }

        //If player or computer wins 3 rounds, return winner
        if (playerScore === 3) {
            return "You Win!";
        }
        else if (computerScore === 3) {
            return "You Lose!"
        }

        //If round number is less than 4 (due to initial selection occuring before the loop) & player or computer have not already won, reselect playerSelection and computerSelection
        if (i < 4 && (playerScore != 3 || computerScore != 3)) {
            playerSelection = playerPlay();
            computerSelection = computerPlay();
        }
    }

    //Used if there is a draw within the 5 rounds, return winner based on score
    if (playerScore > computerScore) {
        return "You Win!"
    }
    else if (playerScore < computerScore) {
        return "You Lose"
    }
    else {
        return "It's a draw!"
    }
}

//Function to ask player for their selection through a prompt
function playerPlay() {
    playerSelection = window.prompt('Rock, Paper or Scissors?'); 
    return playerSelection;
}