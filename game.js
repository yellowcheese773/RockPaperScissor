function GetComputerChoice() {
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

