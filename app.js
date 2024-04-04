const fs = require("fs");

fs.writeFileSync("notes.txt", "hellooooooo");

fs.appendFileSync("notes.txt", "\nMy name is Yonatan (:");
