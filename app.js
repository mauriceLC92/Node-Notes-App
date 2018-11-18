/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
const yargs = require('yargs'); // A better module to parse arguments

const notes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b',
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help()
  .argv;

// let command = process.argv[2]; Old way before using the yargs module
const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note has been created');
    notes.logNote(note);
  } else {
    console.log('Note title already exists...Please add a new title');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s). `);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  const readNote = notes.getNote(argv.title);
  if (readNote) {
    console.log('Note is being read...');
    notes.logNote(readNote);
  } else {
    console.log('No note with given title exists');
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);

  const message = noteRemoved ? 'Note has been removed' : 'Not was not found';
  console.log(message);
} else {
  console.log('Command not recognised');
}
