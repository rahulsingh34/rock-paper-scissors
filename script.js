let textArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

function playRound(playerSelection, computerSelection) {
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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    playerSelection = playerPlay();
    computerSelection = computerPlay();

    for (let i = 0; i < 5; i++) {

        currentGame = playRound(playerSelection, computerSelection);
        console.log(currentGame);

        if (currentGame.includes("Win")) {
            playerScore++;
        }
        else if (currentGame.includes("Lose")) {
            computerScore++;
        }

        if (playerScore === 3) {
            return "You Win!";
        }
        else if (computerScore === 3) {
            return "You Lose!"
        }

        if (i < 4 && (playerScore != 3 || computerScore != 3)) {
            playerSelection = playerPlay();
            computerSelection = computerPlay();
        }
    }

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

function playerPlay() {
    playerSelection = window.prompt('Rock, Paper or Scissors?'); 
    return playerSelection;
}