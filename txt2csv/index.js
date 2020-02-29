const fs = require('fs');
const readline = require('readline');
const path = require('path');

const txtFile = process.argv[2];
const numFields = process.argv[3];
const csvFile = path.basename(txtFile) + '.csv';

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
    // console.log(`${count}: "${line.trim()}"`);
    row = row + '"' + line.trim() + '"';
    if ((count % numFields) === 0) {
        console.log(row);
        console.log('===============');
        row = row + '\n';
        fs.appendFile(csvFile, row, (err) => {
            if (err) throw err;
        });
        row = ''; // reset row
    } else {
        row = row + ',';
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