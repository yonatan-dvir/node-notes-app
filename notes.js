const fs = require("fs");

// print the given note content
const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => {
    return note.title === title;
  });
  // If the note wasn't found
  if (!noteToRead) {
    console.log(`No such note with title of "${title}". Try again!`);
  } else {
    console.log(`Note: ${noteToRead.title}\nBody: ${noteToRead.body}`);
  }
};

// List all notes
const listNotes = () => {
  const notes = loadNotes();
  console.log("Your notes:");
  notes.forEach((note) => {
    console.log(note.title);
  });
};

// Add a note to the notes.json file
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });

  // if the title is taken
  if (duplicateNote) {
    console.log(`Note title "${title}" is taken!`);
  } else {
    notes.push({
      title: title,
      body: body,
    });
    console.log("Note added!");
    savesNotes(notes);
  }
};

// Remove the given note from the notes.json file
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });
  // If the notes list wasn't changed
  if (notes.length === notesToKeep.length) {
    console.log(`No such note with title of "${title}". Try again!`);
  } else {
    console.log(`Note "${title}" removed!`);
  }
  savesNotes(notesToKeep);
};

// Get a json object of notes and save it in the notes.json file
const savesNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

// Return the current notes as an array with js objects (the notes)
const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJSON = notesBuffer.toString();
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { readNote, listNotes, addNote, removeNote };
