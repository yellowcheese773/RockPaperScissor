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