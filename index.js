// Password Generator CLI Application
// Full Stack JavaScript - QAP 1
// By: Vanessa Maher
// Version 0.2.0

const process = require('node:process');
const arguments = process.argv.slice(2);
const validArguments = ["--help", "--h", "help", "--length", "--l"];
// Set default length to 8 if user does not pass the -- length argument.
let length = 8;

// Arguments:
if (arguments.includes("--help") || arguments.includes("--h") || arguments.includes("help")) {
    console.log(`This is a generic password generator.

        Arguments:
        --help, --h, help: Displays this help message.
        --length, --l: Sets the length of the password. Default is 8.`);
        process.exit(0);
        // Exit after the above so that the code does not continue
} else if (arguments.includes("--length") || arguments.includes("--l")) {
    if (arguments.includes("--length")) {
        length = arguments[arguments.indexOf("--length") + 1];
    } else if (arguments.includes("--l")) {
        length = arguments[arguments.indexOf("--l") + 1];
    }
    
    if (length === undefined || isNaN(length) || length < 1) {
        // If length is not provided or is not a number, show an error message
        console.log("Please provide a length value after the --length argument.");    
    }
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
let password = "";

function GeneratePassword() {
    for (let i = 0; i < length; i++) {
        // Generate a random alphabetical character until password reaches the correct length
        const characterPool = alphabet
        password += characterPool[Math.floor(Math.random() * characterPool.length)];
    }
    // Output the password:
    console.log(password);
}

GeneratePassword();