const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {buildSchema} = require('graphql'); //per gli schema
const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true 
}))
app.listen(5000, () => console.log('Server Running'))