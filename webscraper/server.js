var express = require('express')
var fs = require('fs')
var path = require('path')
var request = require('request')
var cheerio = require('cheerio'), 
    cheerioTableparser = require('cheerio-tableparser')
var dotenv = require('dotenv').config()

var app = express()

app.get('/scrape', function(req, res) {
    // url to scrape
    url = 'https://studycli.org/the-100-most-common-chinese-characters/'
    console.log(url)

    request(url, function(error, response, html) {
        if (error) throw error

        console.log('request works!')
        // console.log(html)

        var $ = cheerio.load(html)
        //     $ = cheerio.load("<table id='complex'> \
        //     <tr><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td></tr> \
        //     <tr><td rowspan='5'>1a</td><td>2a</td><td>3a</td><td>4a</td><td>5a</td></tr> \
        //     <tr><td rowspan='2' colspan='2'>2b</td><td>4b</td><td>5b</td></tr> \
        //     <tr><td rowspan='2'>4c</td><td>5c</td></tr> \
        //     <tr><td rowspan='2'>2d</td><td>3d</td><td>5d</td></tr> \
        //     <tr><td>3e</td><td>4e</td><td>5e</td></tr> \
        //   </table>");

        cheerioTableparser($)

        var data = $("#mobile").parsetable(true, true, true)

        // let jsonObj = {id: "", cn: "", pinyin: "", en: ""}

        let jsonData = []

        for (let i = 1; i < data[0].length; i++) {
            for (let j = 0; j < data.length; ) {
                // skip table head column
                if (data[j][i] === 'No.') break
                
                let jsonObj = {id: "", cn: "", pinyin: "", en: ""}
                jsonObj.id = data[j++][i]
                jsonObj.cn = data[j++][i]
                jsonObj.pinyin = data[j++][i]
                jsonObj.en = data[j++][i]

                jsonData.push(jsonObj)
            }
            // cross check jsonObj while developing
            // console.log(jsonObj)

            

            // append to output.json file
            // fs.appendFile('output.json', JSON.stringify(jsonObj, null,2), function(err){
            //     if (err) throw error
            // })
        }

        fs.appendFile('output.json', JSON.stringify(jsonData, null,2), function(err){
            if (err) throw error
        })        

        res.send('Check you console!')
        
    })
})

app.listen(process.env.PORT || 8080)
console.log(`Magic happens on port ${process.env.PORT}`)

exports = module.exports = app
