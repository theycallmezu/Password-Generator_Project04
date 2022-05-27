/// ARRAYS ///
var weakPasswordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var mediumPasswordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var strongPasswordCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "[", "]", "{", "}", ";", "<", ">", "~", "?", "!", "@", "#", "$", "^", "&", "*", "(", ")", "-", "_"] 


/// OBJECTS ///
let outputOne = document.getElementById("output-01")
let outputTwo = document.getElementById("output-02")
let outputThree = document.getElementById("output-03")
let outputFour = document.getElementById("output-04")

var passwordLength = 16;
let numberMain = document.getElementById("userInput");

/// FUNNCTIONS ///
function getWeakPassword() {
    return weakPasswordCharacter[Math.floor(Math.random()*weakPasswordCharacter.length)];
}
function getMediumPassword() {
    return mediumPasswordCharacter[Math.floor(Math.random()*mediumPasswordCharacter.length)];
}
function getStrongPassword() {
    return strongPasswordCharacter[Math.floor(Math.random()*strongPasswordCharacter.length)];
}

/// MASTER FUNCTION ///
function getPasswords() {  
    let numberSelected;
    let userUnitNumber = Number(document.getElementById("userInput").value); 
    
    if (isNaN(userUnitNumber)) {
        numberSelected = "That is not a number.";
        document.getElementById("error-message").style.color = "#ff0000";
        userUnitNumber = `0`;
        numberMain.textContent = `0`;

    } else if ( userUnitNumber < 5 ) {
        numberSelected = "Please pick a number more than 4.";
        document.getElementById("error-message").style.color = "#ff0000";
        userUnitNumber = `0`;
        numberMain.textContent = `0`;
    } else if ( userUnitNumber > 16 ) {
        numberSelected = "Please pick a number less than 17.";
        document.getElementById("error-message").style.color = "#ff0000";
        userUnitNumber = `0`;
        numberMain.textContent = `0`;
    } else {   
        numberSelected = "How many character would you like?";
        document.getElementById("error-message").style.color = "#000000";
        numberMain.textContent = userUnitNumber;
    }
    
    document.getElementById("error-message").innerHTML = numberSelected ;
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
    } else if(document.getElementById('medium').checked) {       
        for (var i = 0; i < userUnitNumber; i++) {
            outputOne.textContent += getMediumPassword(); 
            outputTwo.textContent += getMediumPassword(); 
            outputThree.textContent += getMediumPassword(); 
            outputFour.textContent += getMediumPassword();
        }
    } else if(document.getElementById('strong').checked) { 
        for (var i = 0; i < userUnitNumber; i++) {
            outputOne.textContent += getStrongPassword(); 
            outputTwo.textContent += getStrongPassword(); 
            outputThree.textContent += getStrongPassword(); 
            outputFour.textContent += getStrongPassword();
        }
    } else { 
        document.getElementById("error").innerHTML = "You have not selected a password strength."; 
    } 

} 

/// COPY PASSWORD FUNCTIONS ///
function copyPassword1() {
    var copyText
    copyText = document.getElementById("output-01").innerHTML;
    navigator.clipboard.writeText(copyText)
    document.getElementById("copy-message1").innerHTML = `You have Copied: "${copyText}"`
}
function copyPassword2() {
    var copyText
    copyText = document.getElementById("output-02").innerHTML
    navigator.clipboard.writeText(copyText)
    document.getElementById("copy-message2").innerHTML = `You have Copied: "${copyText}"`   
}
function copyPassword3() {
    var copyText
    copyText = document.getElementById("output-03").innerHTML
    navigator.clipboard.writeText(copyText)
    document.getElementById("copy-message3").innerHTML = `You have Copied: "${copyText}"`
}
function copyPassword4() {
    var copyText
    copyText = document.getElementById("output-04").innerHTML
    navigator.clipboard.writeText(copyText)
    document.getElementById("copy-message4").innerHTML = `You have Copied: "${copyText}"`
}
