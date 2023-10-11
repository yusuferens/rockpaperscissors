document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
});

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        document.getElementById("result").innerText = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        document.getElementById("result").innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        document.getElementById("result").innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
});

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        document.getElementById("result").innerText = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        document.getElementById("result").innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        document.getElementById("result").innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
