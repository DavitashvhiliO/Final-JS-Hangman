// სიტყვების მასივი
const words = [
  "javascript",
  "html",
  "css",
  "node",
  "react",
  "angular",
  "vue",
  "python",
  "ruby",
  "java",
];

// ფუნქცია მასივიდან შემთხვევითი რიცხვის შერჩევისთვის
function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// სიტყვის არჩევა
let selectedWord = chooseWord();
let hiddenWord = [];

// სიტყვის დაფარვა ქვედა ტირეებით
for (let i = 0; i < selectedWord.length; i++) {
  hiddenWord.push("_");
}

// ცდების რაოდენობა
let attempts = 10;
let guessedLetters = [];
// თამაში
while (attempts > 0) {
  console.log("სიტყვა: " + hiddenWord.join(" "));
  let guesstext = prompt(
    `გამოიცანით სიტყვა ასოების მეშვეობით, ეს სიტყვა პროგრამირების ერთ-ერთი ენაა: ${hiddenWord.join(
      " "
    )}, ${hiddenWord.length} სიტყვა.`
  );
  let guess = guesstext.toLowerCase();

  // ვალიდაცია ცარიელ ინფუთზე, შეყვანილ რიცხვსა და განმეორებით შეყვანილ ასოზე
  if (!guess || !isNaN(parseInt(guess))) {
    alert("გთხოვთ, შეიყვანოთ ასო.");
    continue;
  }

  if (guessedLetters.includes(guess)) {
    console.log("თქვენ უკვე შეამოწმეთ ეს ასო, ცადეთ სხვა ასო");
    continue;
  }

  // დაფარულ სიტვაში სწორი ასოს ჩასმა
  guessedLetters.push(guess);

  // შევამოწმოთ თუ შეყვანილი ასო დაფარულ სიტყვაშია
  if (selectedWord.includes(guess)) {
    console.log(guess + " სწორი ასოა!");
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === guess) {
        hiddenWord[i] = guess;
      }
    }
  } else {
    console.log(guess + " არასწორი ასოა, დარჩენილია: " + --attempts + " ცდა");
  }

  if (!hiddenWord.includes("_")) {
    console.log("გილოცავთ! თქვენ გამოიცანით სიტყვა: " + selectedWord);
    break;
  }
}

// Game Over
if (attempts === 0) {
  console.log(
    "თქვენი ცდების რაოდენობა დასრულდა, სამწუხაროდ თქვენ ვერ გამოიცანით სიტყვა: " +
      selectedWord
  );
}
