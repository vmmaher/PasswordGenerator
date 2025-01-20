# Password Generator CLI Application

## Overview
This is a simple command-line interface (CLI) application that generates a random password. The application is written in JavaScript and can be executed using Node.js.

## Features
- Generate a random password of a specified length.
- Display help information.

## Usage
To use the password generator, run the following command in your terminal:

```sh
node index.js [arguments]
```

### Arguments
- `--help`, `--h`, `help`: Displays the help message.
- `--length`, `--l`: Sets the length of the password. Default is 8.

### Examples
Generate a password with the default length (8 characters):
```sh
node index.js
```

Generate a password with a specified length (12 characters):
```sh
node index.js --length 12
```

Display the help message:
```sh
node index.js --help
```