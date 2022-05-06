let playerScore = 0;
let computerScore = 0;
let numberOfGames = 0;
const container = document.querySelector('.container');
const roundResult = document.querySelector('.round-result');
const gameScore = document.querySelector('.game-score');
const gameOver = document.querySelector('.game-over');


function computerPlay(arr){
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection) {
        roundResult.textContent = "It's a tie!"
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')){
                playerScore++;
                roundResult.textContent = `You win this round - ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
            }
    else  {
            computerScore++;
            roundResult.textContent = `You lose this round -  ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
            }
            numberOfGames++;
}

function game(){
    gameScore.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    if (playerScore === 5) {
        gameOver.textContent = `Well Done - you won ${playerScore} games to ${computerScore}!`;
        container.style.display = 'none';
        roundResult.style.display = 'non '
    }
    else if (computerScore === 5) {
        gameOver.textContent = `Sorry - you lost ${computerScore} games to ${playerScore}!`;
        container.style.display = 'none';
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        let compPlays = computerPlay(['rock','paper','scissors']);
        let youPlays = button.id;
        playRound(youPlays,compPlays);
        game();
    })
});
 

