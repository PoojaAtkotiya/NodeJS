const notesUtility = require('./notesUtility');
const yargs = require('yargs');

//Customize Yargs version
yargs.version('1.1.0')

//create commands to add, remove, read, list notes

yargs.command({
    command: 'add',
    describe: 'add new Note cmd',
    builder: {
        title: {
            describe: 'Add Title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Body for add command',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log('title : ' + argv.title);
        // console.log('Body : ' + argv.body);
        notesUtility.addNotes(argv.title, argv.body);
    }
});

//REmove Command
yargs.command({
    command: 'remove',
    describe: 'Remove Note cmd',
    builder: {
        title: {
            describe: "remove note",
            demandOption: true,
            type: "string"
        }
    },
    handler: (args) => {
        notesUtility.removeNote(args.title);
    }
});

//List Command
yargs.command({
    command: 'list',
    describe: "List Command",
    handler: () => {
        console.log("List Command here")
    }
});

//Read Command
yargs.command({
    command: 'read',
    describe: 'Read Command here',
    handler: () => {
        console.log("read command here");
    }
});

yargs.parse(); //this is for same action --> console.log(yargs.argv)