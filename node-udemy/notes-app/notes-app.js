const chalk = require('../../node_modules/chalk');

const notes = require('./notes.js');

const contant = notes('notes.txt');

console.log(contant);

console.log(chalk.green('hello world'));