console.log("deine mutter")

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