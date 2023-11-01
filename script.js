
const rockButton = document.querySelector('.data-rock');
const scissorButton = document.querySelector('.data-scissors');
const paperButton = document.querySelector('.data-paper');
const playAgainButton = document.querySelector('.data-replay');
const winCounter = document.querySelector('.data-round-counter');
const winCounterComp = document.querySelector('.data-round-counter-comp');
const roundResult = document.querySelector('.data-result');



function rpsGame(){
    this.winCounter = 0;
    this.winCounterComp = 0;
    this.currentRound = 1;
    this.totalRounds = 5;
    
}

function getComputerchoice(){
    const choices = ['rock','paper','scissors']
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]
}

function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return 'It is a Tie!'
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

function playGame(userChoice){
    const computerChoice = getComputerchoice();
    const result = determineWinner(userChoice,computerChoice)
    roundResult.textContent = result;
    updateScores(result)

    if(rpsGame.currentRound >=rpsGame.totalRounds){
        declareWinner();
    } else {
        rpsGame.currentRound++;
        updateRoundCounter();
    }

    function updateScores(result){
        if(result === 'You win!'){
            rpsGame.winCounter++
        } else if(result ==='You lose!'){
            rpsGame.winCounterComp++
        }
        winCounter.textContent = 'You = ${rpsGame.winCounter}';
        compWinCount.textContent = 'Comp = ${rpsGame.winCounterComp}'
    }
    function updateRoundCounter(){
        currentRoundDisplay.textContent = `Round:${rpsGame.currentRound}`

}
function declareWinner(){
    if(rpsGame.winCounter > rpsGame.winCounterComp){
        roundResult.textContent = 'You won the game!';
        }else if(rpsGame.winCounter < rpsGame.winCounterComp){
            roundResult.textContent = 'You lost the game!';
            } else {
                roundResult.textContent = 'It is a tie game.';
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;

}

rockButton.addEventListener('click',function(){
   playGame('rock') 
})
paperButton.addEventListener('click',function(){
    playGame('paper') 
 })
 scissorButton.addEventListener('click',function(){
    playGame('scissors') 
 })
}