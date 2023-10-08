// // Assignment code here
function generateAndPrompts (minLength, maxLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters) {
    // Application State
    var LowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var UpperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var NumericCharacters = "1234567890";
    var SpecialCharacters =  "~`!@#$%^&*()_-+={[}]:;<,>.?/";

    let charset = "";
    // put parameter into the function
    if (useLowerCase) {
        charset += LowerCaseCharacters;
    }
    if (useUpperCase) {
        charset += UpperCaseCharacters;
    }
    if (useNumeric) {
        charset += NumericCharacters;
    }
    if (useSpecialCharacters) {
        charset += SpecialCharacters;
    }
    if (charset.length === 0) {
        alert ("Must pick at least one character type to proceed");
        return null;
    } 

    let password = "";
    // change string into number
    var passwordLength = parseInt(prompt("What is your password length?"));

    if(isNaN(passwordLength)) {
        alert("Must choose a number!")
        return null;
    }
    if(passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be within 8 to 128 characters!")
        return null;
    }

    for (let i = 0; i < passwordLength; i++) {
        var randomPass = Math.floor(Math.random() * charset.length);
        password += charset[randomPass];
    }

    return password;
}

function generatePassword () {
    // Add prompt for each character type
    var minLength = 8;
    var maxLength = 128;
    var useLowerCase = confirm("Include lowercase characters?");
    var useUpperCase = confirm("Include uppercase characters?");
    var useNumeric = confirm("Include numeric characters?");
    var useSpecialCharacters = confirm("Include special characters?");
    try {
        // var password = writePassword (minLength, maxLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters);
        var password = generateAndPrompts(minLength, maxLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters);
        console.log(password);
        return password;
    } catch (error) {
        console.error(error.message);
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
