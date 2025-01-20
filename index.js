// Password Generator CLI Application
// Full Stack JavaScript - QAP 1
// By: Vanessa Maher
// Version 0.3.0

const process = require('node:process');
const arguments = process.argv.slice(2);
const validArguments = ["--help", "--h", "help", "--length", "--l", "--numbers", "--n"];
// Set default length to 8 if user does not pass the -- length argument.
let length = 8;
let numbersChoice = false;

// Arguments:
if (arguments.includes("--help") || arguments.includes("--h") || arguments.includes("help")) {
    console.log(`This is a generic password generator.

        By default, it will generate a password with 8 characters using only the alphabet.

        Arguments:
        --help, --h, help: Displays this help message.
        --length, --l: Sets the length of the password. Default is 8.
        --numbers, --n: Adds numbers to the password generation.`);
        process.exit(0);
        // Exit after the above so that the code does not continue
} else if (arguments.includes("--length") || arguments.includes("--l")) {
    length = arguments[arguments.indexOf("--length") + 1];
    if (length === undefined || isNaN(length) || length < 1) {
        // If length is not provided or is not a number, show an error message
        console.log("Please provide a length value after the --length argument.");    
    }
} else if (arguments.includes("--numbers") || arguments.includes("--n")) {
    numbersChoice = true;
} else {
    // Check for any invalid arguments 
    arguments.forEach(function(arg) {
        if (!validArguments.includes(arg)) {
            console.log(`Invalid argument: '${arg}'. Please use --help to see the valid arguments.`);
            process.exit(1);  
            // Exit with an error after the above so that the code does not continue
        }
        // If check passes, continue with the rest of the code
    });
}

// Main code:
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
let password = "";

function GeneratePassword() {
    for (let i = 0; i < length; i++) {
        if (numbersChoice) {
            // If user asked for numbers in their password, add them to the calculation.
            const characterPool = alphabet + numbers;
            password += characterPool[Math.floor(Math.random() * characterPool.length)];
        } else {
            // If user did not ask for extra flags, only use the alphabet by default.
            const characterPool = alphabet;
            password += characterPool[Math.floor(Math.random() * characterPool.length)];
        }        
    }
    // Output the password:
    console.log(password);
}

GeneratePassword();