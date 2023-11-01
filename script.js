
const rockButton = document.querySelector('[data-rock]')
const scissorButton = document.querySelector('[data-scissors]')
const paperButton = document.querySelector('[data-paper]')
const playAgainButton = document.querySelector('[data-replay]')
const roundCounter = document.querySelector('[data-round-counter]')
const roundCounterComp = document.querySelector('[data-round-counter-comp]')
const roundResult = document.querySelector('[data-result]')


function rpsGame(){
    this.scorePlayer = 0;
    this.scoreComputer = 0;
    this.currentRound = 1;
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

function playGame(userChoice,computerChoice){
    const computerChoice = getComputerchoice();

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