const userInputWord = prompt("Type your word here!");

let wordCopy = "";

function palindromeCheck(string){
    for (let i = userInputWord.length - 1; i >= 0; i--){
        wordCopy += userInputWord[i];
    }
    
    console.log(userInputWord);
    
    console.log(wordCopy);

    if (userInputWord === wordCopy){
        console.log("The word is a palindrome!");
    } else{
        console.log("The word is not a palidrome!");
    }
}

palindromeCheck(userInputWord);

