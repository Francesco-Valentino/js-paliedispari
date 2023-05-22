/* const userInputWord = prompt("Type your word here!");

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
 */

const userInputNumber = parseInt(prompt("Type your number here."));

const userInputGuess = prompt("Type 'odd' or 'even'.")

let generatedNumber;

function generateRandomNumber(){
    let generatedNumber = Math.floor(Math.random() * 5 + 1);

    return generatedNumber;
}

generatedNumber = generateRandomNumber();

let sumOfNumbers = generatedNumber + userInputNumber;

console.log("You typed " + userInputNumber);

console.log("I generated " + generatedNumber);

console.log("The sum is " + sumOfNumbers);

let evenCheck = false;

function checkWinner(sum){
    if (sum % 2 === 0){
        evenCheck = true;
        console.log("The sum of our numbers is even.");
    } else{
        console.log("The sum of our numbers is odd.");
    }

    if (evenCheck && userInputGuess == "even"){
        console.log("You win!")
    } else if (evenCheck && userInputGuess == "odd"){
        console.log("You lose.")
    } else if (!evenCheck && userInputGuess == "odd"){
        console.log("You win!")
    } else{
        console.log("You lose.")
    }
}

checkWinner(sumOfNumbers);


