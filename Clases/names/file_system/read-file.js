const fs = require('node:fs')

const content = fs.readFileSync("Hola.txt", "utf8");

console.log("content: ", content )