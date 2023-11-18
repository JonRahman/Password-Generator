// Array of special characters to be included in password
let specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
let upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength;

  // // Prompt for password length
  while (true) {
    let userInput = window.prompt("Enter the desired length of your password as a number.");

    if (userInput === null) {
      return null; // If the user cancels, return null
    }
    
    passwordLength = parseInt(userInput);

    if (isNaN(passwordLength)) {
      window.alert("That is not a number!");
      } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters.");
      } else {
      break;
      }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  
}

// Function to generate password with user input
function generatePassword() {
  const passwordOptions = getPasswordOptions();

  // If the user cancels, return null
  if (passwordOptions === null) {
    return null;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);