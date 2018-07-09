console.log('Starting notes.js...');
const fs = require('fs');


let fetchNotes = () => {

	try {

		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch (e) {
		return [];
	}
};

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes)); //Writing it to the json file as a string
};

let addNote = (title, body) => {
	let notes = fetchNotes(); //Array containing all the notes
	let note = { //The object that we will be using to store our note and title on
		title,
		body
	};
	let duplicateNotes =  notes.filter((note) => note.title === title); //using ES6 arrow function notation...equivalent to the below
	// let duplicateNotes = notes.filter((note) => {
	// 	return note.title === title;
	// });

	if (duplicateNotes.length === 0) { //Means we  want to save the note, because one didnt already exists with that title
		notes.push(note); //Add it to the notes array
		saveNotes(notes);
		return note;
	};

};

let getAll = () => {
	return fetchNotes();
};

let getNote = (title) => {
	let notes = fetchNotes();
	let findNote = notes.filter((note) => note.title === title); // Filter out the note that we want with given title
	return findNote[0];
};

let removeNote = (title) => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter((note) => note.title !== title)
	saveNotes(filteredNotes);
	console.log('Removing note with title: ', title);

	return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
	debugger;
	console.log('----');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

module.exports = {
	//addNote: addNOte in ES6 we can just use the mone word if we want the property of the object to be equal to be referencing the function
	//In ES6 if you have a property whose name is identical to the value, you can just have the property name set
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote,
}

