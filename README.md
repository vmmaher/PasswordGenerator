# Password Generator CLI Application

## Overview
This is a simple command-line interface application that generates a random password. The application is written in JavaScript and can be executed using Node.js.

- Generate a random password of a specified length.
- The default password uses only alphabetical characters and is 8 characters long.

## Usage
To use the password generator, run the following command in your terminal:

```sh
node index.js [arguments]
```

### Arguments
- `--help`, `--h`, `help`: Displays the help message.
- `--length`, `--l`: Sets the length of the password. Default is 8.
- `--numbers`, `--n`: Includes numerical characters in the password.
- `--symbols`, `--s`: Includes symbol characters in the password.

### Examples
Generate a password with the defaults:
```sh
node index.js
```

Display the help message:
```sh
node index.js --help
```

Generate a password with a specified length (12 characters):
```sh
node index.js --length 12
```

Generate a password that includes numbers:
```sh
node index.js --numbers
```

Generate a password that includes symbols:
```sh
node index.js --symbols
```