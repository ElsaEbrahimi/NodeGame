let userInput = process.argv.slice(2).map((move) => move.toLowerCase());

if (userInput.length === 0) {
  console.error("Please write a Word");
  process.exit();
}

let firstChar = userInput[0][0];
let secondChar = userInput[0][1];

// console.log(`${secondChar}`);
// console.log(`${firstChar}`);

const vowels = ["a", "e", "i", "o", "u"];
// prettier-ignore
const consonants = [
  'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
];

const checkWord = function () {
  console.log(`you write : ${userInput}`);

  if (vowels.includes(firstChar)) {
    console.log(`Pig latin Translated:${userInput}way`);
  } else if (
    consonants.includes(firstChar) &&
    consonants.includes(secondChar)
  ) {
    let word = userInput.join("").slice(2);
    console.log(`Pig latin Translated:${word}${firstChar}${secondChar}ay`);
  } else if (consonants.includes(firstChar) && vowels.includes(secondChar)) {
    let word = userInput.join("").slice(1);
    console.log(`Pig latin Translated:${word}${firstChar}ay`);
  } else {
    console.log(`please write word only with letters`);
  }
  return;
};
checkWord(userInput);
