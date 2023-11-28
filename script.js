// Array of special characters to be included in password
const specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
const upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength;

  // Prompt for password length
  while (true) {
    let userInput = window.prompt("Enter the desired length of your password as a number.");

    passwordLength = parseInt(userInput);

    if (isNaN(passwordLength)) {
      window.alert("That is not a number!");
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters.");
    } else {
      break;
    }
  }
  // Confirm password options 
  const userWantsNumbers = window.confirm("Would you like to include numbers in your password?");
  const userWantsSymbols = window.confirm("Would you like to include symbols in your password?");
  const userWantsLowerCase = window.confirm("Would you like to include lowercase letters in your password?");
  const userWantsUpperCase = window.confirm("Would you like to include uppercase letters in your password?");

  // Return an object with selected options
  return {
    passwordLength,
    userWantsNumbers,
    userWantsSymbols,
    userWantsLowerCase,
    userWantsUpperCase
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  const passwordOptions = getPasswordOptions();

  // If the user cancels, return null
  if (!passwordOptions) {
    return null;
  }

  const {
    passwordLength,
    userWantsNumbers,
    userWantsSymbols,
    userWantsLowerCase,
    userWantsUpperCase
  } = passwordOptions;

  let characters = [];

  if (userWantsSymbols) characters = characters.concat(specialCharacters);
  if (userWantsNumbers) characters = characters.concat(numericCharacters);
  if (userWantsLowerCase) characters = characters.concat(lowerCasedCharacters);
  if (userWantsUpperCase) characters = characters.concat(upperCasedCharacters);

  // Check if at least one character set is selected
  if (characters.length === 0) alert("Please select at least one character set.");

  // Generate the password
  let generatedPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomChar = getRandom(characters);
    generatedPassword += randomChar;
  }

  return generatedPassword;

}

// ----- DONT CHANGE -----
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