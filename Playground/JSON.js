/* eslint-disable no-console */
const fs = require('fs');

const originalNote = {
  title: 'Some title',
  body: 'Some body',
};

const originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
