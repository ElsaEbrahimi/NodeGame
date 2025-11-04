const userMove = process.argv.slice(2);
if (userMove.length === 0) {
  console.error("Please choose between: rock, paper, scissors");
  process.exit();
}

// console.log(typeof userMove);
const userInput = userMove.join();
// console.log(typeof userInput);

const gameElement = ["rock", "paper", "scissors"];
const randomIndex = Math.floor(Math.random() * 3);
const pcInput = gameElement[randomIndex];
console.log(typeof pcInput);

const isWinner = function (pcInput, userInput) {
  console.log(`You chose ${userInput}. Computer chose ${pcInput}.`);
  if (userInput === pcInput) {
    console.log("It's a draw!");
  } else if (
    (userInput === "rock" && pcInput === "scissors") ||
    (userInput === "paper" && pcInput === "rock") ||
    (userInput === "scissors" && pcInput === "paper")
  ) {
    console.log("You won!!");
  } else {
    console.log("You Lost");
  }
};
isWinner(pcInput, userInput);
