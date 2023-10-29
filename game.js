function getComputerChoice() {
    random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return "Rock"
    }
    if (random == 1) {
        return "Paper"
    }
    if (random == 2) {
        return "Scissor"
    }
}

function playRound(playerSelection, computerSelection) {

    playerChoice = playerSelection.toLowerCase()



    if (playerSelection == computerSelection.toLowerCase()) {
        return "nobody won"
    }

    if (playerChoice == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!"
    }
    if (playerChoice == "paper" && computerSelection == "Scissor") {
        return "You Lose! Scissor beats Paper!"
    }
    if (playerChoice == "scissor" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissor"
    }
    else {
        return "You Win! " + playerSelection + " beats " + computerSelection
    }

}

function game() {
    userScore = 0
    computerScore = 0
    round = 1
    while (true) {


        userChoice = prompt("Rock, Paper or Scissor?")

        computerChoice = getComputerChoice()



        result = playRound(userChoice, computerChoice)

        if (result.includes("Lose")) {
            computerScore = computerScore + 1
        }
        if (result.includes("Win")) { userScore = userScore + 1 }

        if (userScore == 5) {
            console.log("User has won!")
            break;
        }
        if (computerScore == 5) {
            console.log("computer has won!")
            break;
        }

        console.log("Score for Round " + round + " user: " + userScore + " computer: " + computerScore)
        round += 1
    }
}