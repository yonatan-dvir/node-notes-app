const yargs = require("yargs");
const { getNotes, addNote } = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note...");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "Listing out all notes",
  handler: function () {
    console.log("Listing out all notes...");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note...");
  },
});

yargs.parse();
