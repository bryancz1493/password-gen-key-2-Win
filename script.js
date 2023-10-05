// Assignment code here
function writePassword (minLength, maxLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters) {
    var LowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var UpperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var NumericCharacters = "1234567890";
    var SpecialCharacters = "!@#$%^&*()_-+=";

    let charset = "";
    if (charset === "useLowerCase") {
        charset += LowerCaseCharacters;
    }
    if (charset === "useUpperCase") {
        charset += UpperCaseCharacters;
    }
    if (charset === "useNumberic") {
        charset += NumericCharacters;
    }
    if (charset === "useSpecialCharacters") {
        charset += SpecialCharacters;
    }
    if (charset.length !== 0) {
        throw new Error ("Must pick at least one character type to proceed");
    }

    var passwordLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
    for (i =0; i < passwordLength; i++) {
        var randomPass = Math.floor(Math.random() * charset.length);
        password += charset[randomPass];
    }
    
    return password;
}

// Add prompt for each character type
var minLength = 8;
var maxLength = 128;
var useLowerCase = confirm("Include lowercase characters?");
var useUpperCase = confirm("Include uppercase characters?");
var useNumeric = confirm("Include numeric characters?");
var useSpecialCharacters = confirm("Include special characters?");

var password = writePassword(minLength, maxLength, useLowerCase, useUpperCase, useNumeric, useSpecialCharacters);
console.log(password);

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //var passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
