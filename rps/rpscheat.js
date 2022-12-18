const prompt = require('prompt-promise');

const choices = ['rock', 'paper', 'scissors'];

async function play() {
console.log('Lets play RPS vs NGMI Panda Sales Bot... who cheats');

const playerChoice = await prompt(`Choose one: ${choices.join(', ')} \n`);

let computerChoice;
if (playerChoice === 'rock') {
    computerChoice = 'paper';
} else if (playerChoice === 'paper') {
    computerChoice = 'scissors';
} else {
    computerChoice = 'rock'
    //no need to select playerChoice since we can just assume the last choice is scissorcs and will print rock
    //regardless. Without an error (aka a prompt to thorw an error if we are not checking player inputs)
    //the code will always respond with "rock" we could add a check for this
}
console.log(`NGMI Panda Sales Bot chose ${computerChoice}, git good`)
prompt.done();
}

play();