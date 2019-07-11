const chalk = require('../../node_modules/chalk');

const notes = require('./notes.js');

const contant = notes('notes.txt');

const command = process.argv[2];

console.log(process.argv);


if (command == 'add') {
    console.log('Adding note!');
} else if (command == 'remove') {
    console.log('removeing note!');
}