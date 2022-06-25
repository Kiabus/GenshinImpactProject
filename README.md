# GenshinImpactProject
A project about characters build.
My idea is to recall character's data from JSON file, but for now...it run like that simple code pushed xD

------------------------------------------------------------------------------------------------------------

MONGO DB

I used node.js to create a connection for the application

If the connection with MongoDB doesn't start, see this link https://baraksaidoff.medium.com/fixing-mongoserverselectionerror-while-connecting-mongodb-with-node-js-213aaf0bf596

For now, if you want create your db on Mongo, you can insert the collection called "characters" and insert the datas about Fischl from this link https://github.com/Kiabus/GenshinImpactProject/blob/main/genshinImpact_firstHtml/file%20json/fischl_0-20.json

Start connection with MongoDB: into the terminal, write *node connectionMongo.js*

------------------------------------------------------------------------------------------------------------

NODE JS

For setup, I followed this tutorial https://www.howtographql.com/typescript-helix/1-project-setup/

Start NodeJS project: into the terminal, write *npm run start* or *npm run dev*

------------------------------------------------------------------------------------------------------------

EXPRESS GRAPHQL SERVER (for create a local GraphQL server)

Install Express GraphQL and Nodemon: run into the terminal *npm i express express-graphql graphql* and *npm i --save-dev nodemon* 

Start NodeJS with *npm run devStart*

URL: http://localhost:5000/graphql?
