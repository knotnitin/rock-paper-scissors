let playerWins = 0
let computerWins = 0
let playerChoice = ""
let compChoice = ""

const buttons = document.querySelectorAll('.btn')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
const game = document.querySelector('#game')
game.textContent = "Click one of the buttons below to make a choice"

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Checks what button was clicked
        if(button.id == 'rock'){
            playerChoice = "rock"
        }
        else if(button.id == 'paper'){
            playerChoice = "paper"
        }
        else if(button.id == 'scissors'){
            playerChoice = "scissors"
        }
        // Get computer's choice and find result
        compChoice = getComputerChoice()
        playGame()
      })
})

function getComputerChoice(){
    // Generates computer's choice
    let choice = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    if(choice == 1){
        return "rock"
    }
    else if(choice == 2){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function setScores(){
    // Updates the scores on the screen, this function just makes things look better when a new game is played
    player.textContent = `Player Score: ${playerWins}`
    computer.textContent = `Computer Score: ${computerWins}`
}

function playGame(){
    // Compare's both players' choices and returns the winner
    let outcome = ""
    if(playerChoice == compChoice){
        outcome = "draw"
    }
    else if(playerChoice == "rock" && compChoice == "scissors" || playerChoice == "paper" && compChoice == "rock" || playerChoice == "scissors" && compChoice == "paper"){
        outcome = "player"
    }
    else{
        outcome = "computer"
    }

    // Reveal the outcomes
    if(outcome == "player"){
        game.textContent = `You chose ${playerChoice} and the computer chose ${compChoice}. You win!`
        playerWins++
    }
    else if(outcome == "computer"){
        game.textContent = `You chose ${playerChoice} but the computer chose ${compChoice}. You lose...`
        computerWins++
    }
    else{
        game.textContent = `You chose ${playerChoice} and the computer chose ${compChoice}. It's a draw!`
    }
    setScores()

    // Check for a winner
    if(playerWins == 5){
        game.textContent = `You win! Click one of the buttons to go again!`
        playerWins = 0
        computerWins = 0
    }
    else if(computerWins == 5){
        game.textContent = `You lost... Click one of the buttons to go again!`
        playerWins = 0
        computerWins = 0
    }
}