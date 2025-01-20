// Password Generator CLI Application
// Full Stack JavaScript - QAP 1
// By: Vanessa Maher
// Version 0.3.0

const process = require('node:process');
const arguments = process.argv.slice(2);
const validArguments = ["--help", "--h", "help", "--length", "--l", "--numbers", "--n", "--symbols", "--s"];
// Set default length to 8.
let length = 8;
let numbersChoice = false;
let symbolsChoice = false;

// Arguments:
if (arguments.includes("--help") || arguments.includes("--h") || arguments.includes("help")) {
    console.log(`       
        This is a generic password generator.
        By default, it will generate a password with 8 characters using only the alphabet.
        For more information, please read the README.md file.

        Arguments:
        --help, --h, help: Displays this help message.
        --length, --l: Sets the length of the password. Default is 8.
        --numbers, --n: Adds numbers to the password generation.
        --symbols, --s: Adds symbols to the password generation.`);
        process.exit(0);
        // Exit after the above so that the code does not continue
}

// Parse length argument
if (arguments.includes("--length") || arguments.includes("--l")) {
    let lengthIndex;
    if (arguments.includes("--length")) {
        lengthIndex = arguments.indexOf("--length");
    } else {
        lengthIndex = arguments.indexOf("--l");
    }
    const lengthValue = arguments[lengthIndex + 1];

    if (!lengthValue || isNaN(lengthValue) || lengthValue < 1) {
        console.log("Please provide a valid numeric value.");
        process.exit(1);
    }

    // Convert the length to an integer
    length = parseInt(lengthValue, 10);
}
// Validate all other arguments
arguments.forEach(function(arg, index) {
    if (!validArguments.includes(arg) && (index === 0 || !validArguments.includes(arguments[index - 1])) && isNaN(arg)) {
        console.log(`Invalid argument: '${arg}'. Please use --help to see the valid arguments.`);
        process.exit(1);  
        // Exit with an error after the above so that the code does not continue
    }
});

if (arguments.includes("--numbers") || arguments.includes("--n")) {
    numbersChoice = true;
}

if (arguments.includes("--symbols") || arguments.includes("--s")) {
    symbolsChoice = true;
}

// Main code:
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!\"#$%&'()*+,-./:;<=>?@[]^_{|}~";
function GeneratePassword() {
    let password = "";
    // Default character pool is the alphabet.
    let characterPool = alphabet;
    if (numbersChoice) {
        // If user asked for numbers in their password, add them to the calculation.
        characterPool += numbers;
    } 
    if (symbolsChoice) {
        // If user asked for symbols in their password, add them to the calculation.
        characterPool += symbols;
    } 
    for (let i = 0; i < length; i++) {
        password += characterPool[Math.floor(Math.random() * characterPool.length)];       
    }
    // Output the password:
    return password;
}

console.log(GeneratePassword());