const express = require('express')
const DBUrl = "yourMongoURL";
const MongoClient = require('mongodb').MongoClient
const app = express()

app.use(express.json())

var database 

//GET
app.get('/', (req, resp) => {
    resp.send('Welcome to Genshin API')
})

app.get('/genshin/characters', (req, resp) => {
    database.collection('characters').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })
})

//Fischl
app.get('/genshin/characters/charName', (req, resp) => {
    database.collection('characters').find({name: "Fisch"}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })

})

//Sara
app.get('/genshin/characters/charName', (req, resp) => {
    database.collection('characters').find({name: "Kujou Sara"}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })

})

app.get('/genshin/weapons', (req, resp) => {
    database.collection('weapons').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })
})

app.get('/genshin/weapons/weaName', (req, resp) => {
    database.collection('weapons').find({name: "Messenger"}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })
})

//mongodb connection
app.listen(port, () => {
    MongoClient.connect(DBUrl, {useNewUrlParser: true}, (error, result) =>{
        if(error) throw error
        database = result.db('genshin')
        console.log('Connection successful!')
    })
})
