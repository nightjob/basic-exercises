const prompt = require('prompt-promise');

async function rockPaperScissors() {
let playerScore = 0;
let computerScore = 0;

while (true) {

    let playerMove = await prompt('Enter your move (rock, paper, or scissors): ');

    let computerMove;
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
    computerMove = 'rock';
    } else if (randomNumber < 0.66) {
    computerMove = 'paper';
    } else {
    computerMove = 'scissors';
    }

    if (playerMove === computerMove) {
    console.log('It\'s a tie!');
    } else if (playerMove === 'rock' && computerMove === 'scissors' ||
    playerMove === 'paper' && computerMove === 'rock' ||
    playerMove === 'scissors' && computerMove === 'paper') {
    console.log('You win!');
    playerScore++;
    } else {
    console.log('You lose!');
    computerScore++;
    }

    console.log(`Your Score: ${playerScore}, Computer Score: ${computerScore}`);

    if (playerScore >= 5) {
    console.log('You are the winner!');
    break;
    } else if (computerScore >= 5) {
    console.log('The computer is the winner!');
    break;
    }
}
}

rockPaperScissors();