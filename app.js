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
        res = 'You Lose! Scissors beats Paper'
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
        let play = prompt('Select Rock, Paper, or Scissors')
        playRound(play,computerPlay(['rock','paper','scissors']))
        if (res.charAt(4) === 'W'){
            playerScore++
            numGames++
            console.log(res)
            console.log('Your score: ' +playerScore)
            console.log('Computer score: ' + computerScore)
            console.log('Games played: ' + numGames)
        }
        else if (res.charAt(4) === 'L') {
            computerScore++
            numGames++
            console.log(res)
            console.log('Your score: ' + playerScore)
            console.log('Computer score: ' + computerScore)
            console.log('Games played: ' + numGames)
        }
        else if (res === "It's a tie! Play again"){
            console.log(res)
            console.log('Games played: ' + numGames)
            i--
        }
        else {
            console.log(res)
            i--
        }
    }
    if (playerScore >= 3) {
        console.log("Congrats you won!")
    }
    else {
        console.log('Sorry you lost!')
    }
}

 game()