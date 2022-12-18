const prompt = require('prompt-promise');

async function playRockPaperScissors() {
    console.log("Let's play RPS!");
    console.log("Enter your move: rock, paper, or scissors\n")
    const userMove = await prompt();
    let computerMove;
    if (userMove === "rock") {
        computerMove = "paper";
    } else if (userMove === "paper") {
        computerMove = "scissors";
    } else if (userMove === "scissors") {
        computerMove = "rock";
    }
    console.log(`You chose ${userMove} and the computer chose ${computerMove}`);
console.log('You suck!');
}

playRockPaperScissors();