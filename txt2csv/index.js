const fs = require('fs');
const readline = require('readline');
const path = require('path');

if (process.argv.length !== 4) {
    console.log(`==========\nUsage: node index.js textFile number-of-fiels\n==========`);
    process.exit(1);
}

const txtFile = process.argv[2];
const numFields = process.argv[3];
const csvFile = path.basename(txtFile, '.txt') + '.csv';

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
    console.log(`Number of lines: ${--count}`);
    console.log(`Check output file: ${csvFile}`);
})

/**
const txtContent = fs.readFile(txtFile, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.length);
    // console.log(data.toString());
})
*/