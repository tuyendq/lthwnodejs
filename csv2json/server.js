// Description: Convert csv file to json file using 'csvtojson' package
// 
const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
let csvFile = './customer-data.csv'
let jsonFile = path.basename(csvFile,'.csv') + '.json'

csv()
.fromFile(csvFile)
.then((jsonObj) => {
    // console.log(data)
    fs.appendFile(jsonFile, JSON.stringify(jsonObj), (err) => {
        if (err) throw err
        console.log(`${jsonFile} is appended!`)
    })
})