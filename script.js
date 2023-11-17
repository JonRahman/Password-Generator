// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  while (true) {
    let userInput = window.prompt(
      "Enter the desired length of your password as a number."
    );

    // if user exits the window prompt //
    if (userInput === null) {
      return;
    }

    var passwordLength = parseInt(userInput);

    // (isNan) = is not a number when user types something else //
    if (isNaN(passwordLength)) {
      window.alert("That is not a number!");
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be between 8 and 128 characters.");
    } else {
      break;
    }
  }
  let optionsCart = [];

  for (let i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }

  if (userWantsNumbers === true) {
    optionsCart.push(numberList);
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList);
  }

  if (userWantsLowerCase === true) {
    optionsCart.push(lowercaseList);
  }

  if (userWantsUpperCase === true) {
    optionsCart.push(uppercaseList);
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList);
  }

  let generatePassword = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomList = getRandomItem(optionsCart);
    let randomChar = getRandomItem(randomList);
    generatePassword += randomChar;
  }

  return generatePassword;
}

  let userWantsNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  let userWantsSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );
  let userWantsLowerCase = window.confirm(
    "Would you like to include lowercase letters in your password?"
  );
  let userWantsUpperCase = window.confirm(
    "Would you like to include uppercase letters in your password?"
  );
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