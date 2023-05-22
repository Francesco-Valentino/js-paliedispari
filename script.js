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



let generatedNumber;

function generateRandomNumber(){
    let generatedNumber = Math.floor(Math.random() * 5 + 1);

    return generatedNumber;
}

generatedNumber = generateRandomNumber();

let sumOfNumbers = generatedNumber + userInputNumber;

console.log(generatedNumber);

console.log(sumOfNumbers);

let evenCheck = false;

function checkOddEven(sum){
    if (sum % 2 === 0){
        evenCheck = true;
        console.log("The sum of our numbers is even.");
    } else{
        console.log("The sum of our numbers is odd.");
    }
}

checkOddEven(sumOfNumbers);


