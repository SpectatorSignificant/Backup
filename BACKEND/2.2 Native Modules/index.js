const fs = require("fs");

// writeFile("message.txt", "Hello World", (err) => {
//     if (err) throw err;
//     console.log("File saved");
// });

// fs.readFile()

//import { writeFile } from 'node:fs';
// const fs = require("fs");
fs.readFile('./message.txt', "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
    
});