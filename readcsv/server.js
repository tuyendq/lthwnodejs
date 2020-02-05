const neatCsv = require('neat-csv')

const fs = require('fs')

fs.readFile('../SacramentocrimeJanuary2006.csv', async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(await neatCsv(data))
})