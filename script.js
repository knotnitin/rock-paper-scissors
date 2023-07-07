function getComputerChoice(){
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

function game(){
    function playRound(){
        function validateChoice(choice){
            return (choice == "rock" || choice == "paper" || choice == "scissors");
        }
    
        function compare(player, computer){
            let outcome = ""
            if(player == computer){
                outcome = "draw"
            }
            else if(player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper"){
                outcome = "player"
            }
            else{
                outcome = "computer"
            }
            return outcome
        }
    
    
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Enter your choice of Rock, Paper or Scissors:").toLowerCase()
        // alert(validateChoice(playerChoice))
        while(validateChoice(playerChoice) == false){
            playerChoice = prompt("ERROR: Enter your choice of Rock, Paper or Scissors:").toLowerCase()
        }
        // alert(computerChoice + ", " + playerChoice)
        let outcome = compare(playerChoice, computerChoice)
        // alert("Winner is " + outcome)
        return outcome
    }

    // Play until someone reaches 5 wins
    let playerWins = 0
    let computerWins = 0
    while(playerWins < 5 && computerWins < 5){
        let outcome = playRound()
        if(outcome == "player"){
            playerWins++
            alert("Player wins! Player: " + playerWins + ", Computer: " + computerWins)
        }
        else if(outcome == "computer"){
            computerWins++
            alert("Computer wins! Player: " + playerWins + ", Computer: " + computerWins)
        }
        else{
            alert("It's a draw! Player: " + playerWins + ", Computer: " + computerWins)
        }
    }
    if(playerWins > computerWins){
        alert("Congratulations! You won!")
    }
    else{
        alert("Oh no! Looks like the computer won....")
    }
}

game();