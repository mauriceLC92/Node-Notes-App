// let obj = {
// 	name : 'Chelsea'
// };

// let stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// let personString   = '{"name": "Chelsea", "age": 25}';

// let person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
	title: 'Some title',
	body: 'Some body'
};

let originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

let noteString = fs.readFileSync('notes.json');

let note  = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);