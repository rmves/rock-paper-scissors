function computerPlay(arr){
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

// computerPlay(['rock','paper','scissors'])

let res = ''

function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() === computerSelection) {
        res = "It's a tie! Play again"
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        res = 'You Lose! Paper beats Rock'
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        res = 'You Win! Rock beats Scissors'
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        res = 'You Win! Paper beats Rock'
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        res = 'You Lose! Scissors beats Rock'
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        res = 'You Lose! Rock beats Scissors'
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        res = 'You Win! Scissors beats Paper'
    }
    else {
        res = 'Please chose Rock, Paper, or Scissors'
    }
    return res
}

function game(){
    let playerScore = 0
    let computerScore = 0
    let numGames = 0
    for (let i = 0; i < 5;i++) {
        play = prompt('Select Rock, Paper, or Scissors')
        playRound(play,computerPlay(['rock','paper','scissors']))
    }
    console.log(res)
}

game()