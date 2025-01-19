// Password Generator CLI Application
// Full Stack JavaScript - QAP 1
// By: Vanessa Maher
// Version 0.1.0

// First, create code that generates a password without any arguments.
// const process = require('node:process');

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let password = "";

// Generate a random alphabetical character until password is 10 characters long
for (let i = 0; i < 10; i++) {
    const randomAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
    password += randomAlpha;
}

console.log(password)