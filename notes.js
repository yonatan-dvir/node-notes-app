const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

// Add a note to the notes.json file
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  // if the title is taken
  if (duplicateNotes.length !== 0) {
    console.log("Note title taken!");
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
const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  // If the notes list wasn't changed
  if (notes.length === notesToKeep.length) {
    console.log(`No such note with title of ${title}. Try again!`);
  } else {
    console.log(`Note ${title} removed!`);
  }
  savesNotes(notesToKeep);
};

// Get a json object of notes and save it in the notes.json file
const savesNotes = function (notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

// Return the current notes as an array with js objects (the notes)
const loadNotes = function () {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJSON = notesBuffer.toString();
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote };
