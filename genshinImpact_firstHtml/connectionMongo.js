const DBUrl = "yourURLMongoDB";

const MongoClient = require("mongodb").MongoClient;

const mongodb = new MongoClient(DBUrl, { useUnifiedTopology: false });

mongodb.connect(function(err){
    if(err) console.log(err);
    else console.log("Connection successful!") /*on terminal write node connectionMongo.js to connect*/

    //db and collection may exist on mondo db
    let characters = mongodb.db("genshin").collection("characters");
    let weapons = mongodb.db("genshin").collection("weapons");

    //insert a record
    /*weapons.insertOne({name: "Messenger"})

    //insert an object
    characters.insertOne({advancedStats: {critRate: 5.0}});

    //insert more records
    weapons.insertMany([{name: "The Catch"}, {name: "Predator"}])*/
});

