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

//all characters
app.get('/genshin/collectionName', (req, resp) => {
    database.collection('collectionName').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })
})

//Fischl
app.get('/genshin/collectionName/charName', (req, resp) => {
    database.collection('collectionName').findById(ObjectId("idChar")).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })

})

//Sara
app.get('/genshin/collectionName/charName', (req, resp) => {
    database.collection('collectionName').findById(ObjectId("idChar")).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })

})

//all weapons
app.get('/genshin/collectionName', (req, resp) => {
    database.collection('collectionName').find({}).toArray((err, result) => {
        if(err) throw err
        resp.send(result)
    })
})

//Slingshot
app.get('/api/collectionName/weaponName', (req, resp) => {
    database.collection('collectionName').findById(ObjectId("idWeapon")).toArray((err, result) => {
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
