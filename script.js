// Assignment code here
function writePassword (length, useLowerCase, useUpperCase, useNumberic, useSpecialCharacters) {
    var LowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var UpperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var NumbericCharacters = "1234567890";
    var SpecialCharacters = "!@#$%^&*()_-+=";

    let charset = "";
    if (charset === "useLowerCase") {
        charset += LowerCaseCharacters;
    }
    if (charset === "useUpperCase") {
        charset += UpperCaseCharacters;
    }
    if (charset === "useNumberic") {
        charset += NumbericCharacters;
    }
    if (charset === "useSpecialCharacters") {
        charset += SpecialCharacters;
    }
    if (!charset) {
        return;
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordText.value = password;

}

// Add prompt for each character type

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
