const { cursorTo } = require("readline");

const DBUrl = "mongodb+srv://kiabus:LoScr1c1o@genshinimpact.jxjnt.mongodb.net/?retryWrites=true&w=majority";

const MongoClient = require("mongodb").MongoClient;

const mongodb = new MongoClient(DBUrl, { useUnifiedTopology: false });

mongodb.connect(function(err){
    if(err) console.log(err);
    else console.log("Connection successful!") /*on terminal write node connectionMongo.js to connect*/

    //db and collection may exist on mongo db
    let characters = mongodb.db("genshin").collection("characters");
    let weapons = mongodb.db("genshin").collection("weapons");

    //find character by name
    const findCharacter = characters.find({name: "Fischl"});
    findCharacter.forEach(console.dir);

    //find weapon by name
    const findWeapon = weapons.find({name: "Hunter's Bow"});
    findWeapon.forEach(console.dir);

    //insert a record
    /*weapons.insertOne({name: "Messenger"})

    //insert an object
    characters.insertOne({advancedStats: {critRate: 5.0}});

    //insert more records
    weapons.insertMany([{name: "The Catch"}, {name: "Predator"}])*/
});

