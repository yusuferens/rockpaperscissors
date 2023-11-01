const rockButton = document.querySelector('.data-rock');
const scissorButton = document.querySelector('.data-scissors');
const paperButton = document.querySelector('.data-paper');
const playAgainButton = document.querySelector('.data-replay');
const winCounter = document.querySelector('.data-round-counter');
const compWinCount = document.querySelector('.data-round-counter-comp');
const roundResult = document.querySelector('.data-result');
const currentRoundDisplay = document.querySelector('.data-round-counter');

function rpsGame() {
    this.compWinCount = 0;
    this.winCounter = 0;
    this.winCounterComp = 0;
    this.currentRound = 1;
    this.totalRounds = 5;
}

const game = new rpsGame();

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It is a Tie!';
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    roundResult.textContent = result;
    updateScores(result);

    if (game.currentRound >= game.totalRounds) {
        declareWinner();
    } else {
        game.currentRound++;
        updateRoundCounter();
    }
}

function updateScores(result) {
    if (result === 'You win!') {
        game.winCounter++;
    } else if (result === 'You lose!') {
        game.winCounterComp++;
    }
    winCounter.textContent = `You = ${game.winCounter}`;
    compWinCount.textContent = `Computer = ${game.winCounterComp}`;
}



function declareWinner() {
    if (game.winCounter > game.winCounterComp) {
        roundResult.textContent = 'You won the game!';
    } else if (game.winCounter < game.winCounterComp) {
        roundResult.textContent = 'You lost the game.';
    } else {
        roundResult.textContent = 'It is a tie game.';
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    playAgainButton.style.display = 'block';
}

rockButton.addEventListener('click', function () {
    playGame('rock');
});
paperButton.addEventListener('click', function () {
    playGame('paper');
});
scissorButton.addEventListener('click', function () {
    playGame('scissors');
});

playAgainButton.addEventListener('click', function () {
   if(game.currentRound>= game.totalRounds){
    game.winCounter = 0;
    game.winCounterComp = 0;
    game.currentRound = 1;
    winCounter.textContent = 'You = 0';
    compWinCount.textContent = 'Computer = 0';
    roundResult.textContent = ''; 
    playAgainButton.style.display = 'none'; 
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    }
});