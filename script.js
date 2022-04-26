//Options for computer to play
let textArray = ['Rock', 'Paper', 'Scissors'];

//Function that choses a random number within the length of the array and returns either Rock, Paper or Scissors 
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*textArray.length);
    return textArray[randomNumber];
}

//For keeping score
let playerScore = 0;
let computerScore = 0;
let pScore = document.getElementById('player-score');
let cScore = document.getElementById('computer-score');
let winner = document.getElementById('winner');

//To clear game
const myTimeout = setInterval(clearGame, 7500);

//Function for playing a single round and deciding who won
function playRound(playerSelection, computerSelection) {
    //Reassigning the variable "playerSelection" to be case insensitive and match the computer's selection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
		playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
		playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection; 
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
		playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
		computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
		computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection; 
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
		computerScore++;
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

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		console.log(playRound(btn.id, computerPlay()));
		pScore.innerText = playerScore;
		cScore.innerText = computerScore;

		if (pScore.innerText == '5') {
			winner.innerText = "You Win! Karen has been defeated!";
			myTimeout
		}
		else if (cScore.innerText == '5') {
			winner.innerText = "Karen Wins, better luck next time.";
			myTimeout
		};
	});
});

function clearGame() {
	playerScore = 0;
	computerScore = 0;
	pScore.innerText = 0;
	cScore.innerText = 0;
	winner.innerText = " ";
}