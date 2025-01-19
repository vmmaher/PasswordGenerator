// Password Generator CLI Application
// Full Stack JavaScript - QAP 1
// By: Vanessa Maher
// Version 0.1.1

// Second redition: add onto the base code by adding a --help argument. As well, change length to 8 by default.
// Length flag addition will be coming next.

const process = require('node:process');
const arguments = process.argv.slice(2);

if (arguments.includes("--help") || 
    arguments.includes("--h") ||
    arguments.includes("help")) {
    console.log(`
        This is a generic password generator.

        Arguments:
        --help, --h, help: Displays this help message.
    `)
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let password = "";

// Generate a random alphabetical character until password is 10 characters long
for (let i = 0; i < 8; i++) {
    const randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
    password += randomAlpha;
}

console.log(password)