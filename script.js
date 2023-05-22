const userInputWord = prompt("Type your word here!");

let wordCopy = "";

for (let i = userInputWord.length; i >= 0; i--){
    wordCopy += userInputWord[i];
}

console.log(userInputWord);

console.log(wordCopy);
