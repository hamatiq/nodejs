const chalk = require('../../node_modules/chalk');
const yargs = require('../../node_modules/yargs');
const notes = require('./notes.js');

const contant = notes('notes.txt');

const command = process.argv[2];
// customize yarg
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title);
    }
});


// remove, read, list commands
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function() {
        console.log('removing a note note!');
    }
});

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler: function() {
        console.log('listing notes');
    }
});

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('reating a note!');
    }
});

// add, remove, read, list

console.log(yargs.argv);