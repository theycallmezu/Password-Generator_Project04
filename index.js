/*
var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var ambiguousCharacter = ["[", "]", "{", "}", ";", "<", ">", "~", "?"]
var shiftSymbols = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "-", "_"]
*/

let outputOne = document.getElementById("output-01")
let outputTwo = document.getElementById("output-02")
let outputThree = document.getElementById("output-03")
let outputFour = document.getElementById("output-04")

var passwordLength = 10;

let numberMain = document.getElementById("userInput");










var weakPasswordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var mediumPasswordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var strongPasswordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "[", "]", "{", "}", ";", "<", ">", "~", "?", "!", "@", "#", "$", "^", "&", "*", "(", ")", "-", "_"] 

function getWeakPassword() {
    return weakPasswordCharacter[Math.floor(Math.random()*weakPasswordCharacter.length)];
}
function getMediumPassword() {
    return mediumPasswordCharacter[Math.floor(Math.random()*mediumPasswordCharacter.length)];
}
function getStrongPassword() {
    return strongPasswordCharacter[Math.floor(Math.random()*strongPasswordCharacter.length)];
}


function getPasswords() {  

    let voteable;

    let userUnitNumber = Number(document.getElementById("userInput").value); 
    
    if (isNaN(userUnitNumber)) {
      voteable = "Umm... that is not a number.";
      numberMain.textContent = `0`;

    } else {   
      voteable = (userUnitNumber < 0) ? "Whao... You're in the negatives." : "How many character would you like?";
      numberMain.textContent = userUnitNumber;
    }
    
    document.getElementById("error-message").innerHTML = voteable ;


    document.getElementById("disp").innerHTML = " "
    document.getElementById("error").innerHTML = " "
    outputOne.textContent = " "
    outputTwo.textContent = " "
    outputThree.textContent = " "
    outputFour.textContent = " "

    if(document.getElementById('weak').checked) { 

        for (var i = 0; i < userUnitNumber; i++) {
            outputOne.textContent += getWeakPassword(); 
            outputTwo.textContent += getWeakPassword(); 
            outputThree.textContent += getWeakPassword(); 
            outputFour.textContent += getWeakPassword();
        }

    } 
    else if(document.getElementById('medium').checked) {  
     
        for (var i = 0; i < userUnitNumber; i++) {
            outputOne.textContent += getMediumPassword(); 
            outputTwo.textContent += getMediumPassword(); 
            outputThree.textContent += getMediumPassword(); 
            outputFour.textContent += getMediumPassword();
        }

    }  
    else if(document.getElementById('strong').checked) { 

        for (var i = 0; i < userUnitNumber; i++) {
            outputOne.textContent += getStrongPassword(); 
            outputTwo.textContent += getStrongPassword(); 
            outputThree.textContent += getStrongPassword(); 
            outputFour.textContent += getStrongPassword();
        }

    }
    else { 
        document.getElementById("error").innerHTML = "You have not selected a password strength."; 
    } 
} 