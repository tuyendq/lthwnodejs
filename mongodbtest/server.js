const dotenv = require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const uri = "mongodb+srv://" + process.env.DBUSER + ":" + process.env.DBPASS + "@cluster0-itopv.mongodb.net/book?retryWrites=true&w=majority"
MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
        console.log('Error occured while connecting to MongoDB Atlas:\n')
        throw err;
    } else {
        console.log('Connected...')
        const collection = client.db('book').collection('bookDetails')
        collection.findOne({}, function(err, results) {
            if (err) throw err
            console.log(results)
        })

        client.close()
    }
})