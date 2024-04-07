const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

// Add a note to the notes.json file
const addNote = function (title, body) {
  const notes = loadNotes();

  // if the title is taken
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
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

// Get a json object of notes and save it in the notes.json file
const savesNotes = function (notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

// Return the current notes as a json object
const loadNotes = function () {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJSON = notesBuffer.toString();
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote };
