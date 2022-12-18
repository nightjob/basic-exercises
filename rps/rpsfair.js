const prompt = require('prompt-promise');

const choices = ['rock', 'paper', 'scissors'];

async function play() {
console.log('Lets play RPS vs NGMI Panda Sales Bot');

const playerChoice = await prompt(`Choose one: ${choices.join(', ')} \n`);

if (!choices.includes(playerChoice)) {
    console.log('Invalid choice');
    return;
}

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(`Computer chose ${computerChoice}`);

  // Determine the winner
if (playerChoice === computerChoice) {
    console.log('It\'s a tie!');
} else {
    console.log('Computer wins');
}
prompt.done();
}

play();
