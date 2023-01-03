# GenshinImpactProject
A project about characters build.
My idea is to recall character's data from JSON file, but for now...it run like that simple code pushed xD

------------------------------------------------------------------------------------------------------------

MONGO DB

I used node.js to create a connection for the application

If the connection with MongoDB doesn't start, see this link https://baraksaidoff.medium.com/fixing-mongoserverselectionerror-while-connecting-mongodb-with-node-js-213aaf0bf596

For now, if you want create your db on Mongo, you can insert the collection called "characters" and insert the datas about Fischl from this link https://github.com/Kiabus/GenshinImpactProject/blob/main/genshinImpact_firstHtml/file%20json/fischl_0-20.json

Start connection with MongoDB: into the terminal, write *node connectionMongo.js*

If you want a connection refresh any time you edit the code, start connection into the terminal with "nodemon connectionMongo.js"

------------------------------------------------------------------------------------------------------------

NODE JS

For setup, I following this tutorial https://www.howtographql.com/typescript-helix/1-project-setup/

Start NodeJS project: into the terminal, write *npm run start* or *npm run dev*

------------------------------------------------------------------------------------------------------------

GENSHIN API

It is possible call by Postman the Genshin API.


