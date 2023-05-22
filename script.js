const userInputWord = prompt("Type your word here!");

let wordCopy = "";

for (let i = 0; i < userInputWord.length; i++){
    wordCopy += userInputWord[i];
}

console.log(userInputWord);

console.log(wordCopy);
