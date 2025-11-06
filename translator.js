let userInput = process.argv.slice(2).map((move) => move.toLowerCase());

if (userInput.length === 0) {
  console.error("Please write a Word");
  process.exit();
}
let firstChar = userInput[0][0];
// console.log(`${firstChar}`);
const vowels = ["a", "e", "i", "o", "u"];
// prettier-ignore
const consonants = [
  'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
];



const checkWord = function (userInput,firstChar, vowel, consonants) {
  console.log(`you write : ${userInput}`);

  if (vowels.includes(firstChar)) {
let input=
  }
  else if

};
