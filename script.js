// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  let question1 = prompt("Please enter a number between 8 and 128 characters")
  console.log(question1)
  let includeUppercase = confirm("Do you want to include uppercase letters?")
  let includeLowercase = confirm("Do you want to include lowercase letters?")
  console.log(includeUppercase, includeLowercase);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

