let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        return "rock"
    }
    else if (num === 2) {
        return "paper"
    }
    else if (num === 3) {
        return "scissor"
    }

}

function getHumanChoice() {
    let answer = prompt("whats your move?")
    return answer
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        console.log("Nobody wins, you have " + humanChoice + " computer has " + computerChoice)
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win, paper beats rock")
        humanScore++
    }
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win, rock beat scissor")
        humanScore++
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win, scissor beats paper")
        humanScore++
    }
    else {
        console.log("You have lost, " + computerChoice + " beats " + humanChoice)
        computerScore++
    }

}

function playGame() {
    for (i = 0; i < 5; i++) {
        const computerChoice1 = getComputerChoice()
        const humanChoice1 = getHumanChoice()
        playRound(humanChoice1, computerChoice1)

    }
    if (humanScore > computerScore) {
        console.log("You have won " + humanScore + " to " + computerScore)
    }
    else if (humanScore < computerScore) {
        console.log("You have lost " + humanScore + " to " + computerScore)
    }
    else {
        console.log("equal " + humanScore + " to " + computerScore)
    }


}