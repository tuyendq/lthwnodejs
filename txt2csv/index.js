const fs = require('fs');
const readline = require('readline');
const path = require('path');

const txtFile = process.argv[2];
const numFields = process.argv[3];
console.log(`Filename: ${txtFile}`);
console.log(`Number of fields: ${numFields}`);

let count = 1;
const rl = readline.createInterface({
    input: fs.createReadStream(txtFile),
    output: process.stdout,
    terminal: false
});
let row = '';
rl.on('line', (line) => {
    
    console.log(`${count}: "${line.trim()}"`);
    row = row + line.trim();
    if ((count % numFields) === 0) {
        console.log('===============');
        row = ''; // reset row
    }
    count++;
});
rl.on('close', () => {
    console.log(`Number of lines: ${count}`);
})

/**
const txtContent = fs.readFile(txtFile, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.length);
    // console.log(data.toString());
})
*/