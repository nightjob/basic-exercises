1. Declare a function that takes 4 arguments, and adds them all together, and returns the sum.
`Complete`

2. Declare a function that takes two arguments, and if the first argument is greater than the second one, return true, otherwise return false.
`Complete`

3. Declare a function that takes a single argument, an array of numbers, and loops over all the elements of the array, adding them together, and returning the total sum of all the elements in the array.
`complete`

4. Declare an object that two properties, "numberOne", and "numberTwo", and a function on that object called "addAllNumbers", that returns the difference of numberOne minus numberTwo.

5. Declare an array that takes in a single argument, a string, and returns the string lower-cased. ie: I pass in "Crane Juice", it should return "crane juice".
`complete`

6. Declare a function that checks if an element is in an array. It takes two arguments, the array, and the element to look for. If the element is found, return true, otherwise, return false.
`complete`

7. Declare an object that has a single property, "clothes", which is an empty array, a function on that object called "putOnClothes" which take a single argument, an item of clothes you want to put on (which will be a string, like "hat"). If the object is already wearing that piece of clothing, throw an error, otherwise, add the clothes to the array and log out the new clothes array.
`complete`

8. Declare a function that takes in a single argument, a name, and then says hi to that name via the console, UNLESS that name is one of the leaver's names: tums, piccle, or interesting, in which case it instead tells that user to fuck off via the console.
`complete`

9. ROCK PAPER SCISSORS! Declare a function that plays rock paper scissors with you via the `prompt-promise` npm package. The funcion should prompt you for your decision, then cheat, and always pick the winning move, so you can never win.
`error: Revisit this one`

`Let's play rock paper scissors!
Enter your move: rock, paper, or scissors
(node:30867) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be of type string or an instance of Buffer. Received undefined
at validChunk (_stream_writable.js:281:10)
at WriteStream.Writable.write (_stream_writable.js:316:21)
at prompt (/home/andrew/basic-exercises/node_modules/prompt-promise/index.js:22:18)
at playRockPaperScissors (/home/andrew/basic-exercises/rps/rps.js:6:26)
at Object.<anonymous> (/home/andrew/basic-exercises/rps/rps.js:19:1)
at Module._compile (internal/modules/cjs/loader.js:999:30)
at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
at Module.load (internal/modules/cjs/loader.js:863:32)
at Function.Module._load (internal/modules/cjs/loader.js:708:14)
at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
(node:30867) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:30867) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.`

10. Do your rock paper scissors function again, but it selects randomly, not cheating.

11. Modify your rock paper scissors function to keep track of the score, and log it out after every round. So more than 1 round can be played at a time, in a loop. AFter every round it should say "Your Score: {yourScore}, ComputerScore: {computerScore}.

12. Modify your rock paper scissors function so that after one player gets to 5 points, the game ends.
