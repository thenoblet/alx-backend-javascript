#!/usr/bin/env node

/**
 * This function prompts the user for their name and outputs a personalized greeting.
 * It listens for data input from `stdin` and outputs the user's name,
 * then exits the process.
 */

function getInput() {
  process.stdout.write('Welcome to Holberton School, what is your name?\n');
  process.stdin.on('data', (answer) => {
    process.stdout.write(`Your name is: ${answer}`);
    process.exit(0);
  });
}

/**
 * If the process is connected to a terminal (`isTTY`), call `getInput()` to ask for
 * the user's name.
 * Additionally, if not in a TTY context, it attaches an event listener to log a
 * closing message when the process exits.
 */
if (process.stdin.isTTY) {
  getInput();
} else {
  getInput();
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
