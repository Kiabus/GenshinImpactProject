const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql'); //per gli schema delle queries
const app = express();

//database
const weapons = [
    {id: 1, name: 'Sword'},
    {id: 2, name: 'Bow'},
    {id: 3, name: 'Catalyst'},
    {id: 4, name: 'Claymore'},
    {id: 5, name: 'Polearm'}
]

const characters = [
    {id: 1, name: 'Fischl', weaponId: 2},
    {id: 2, name: 'Noelle', weaponId: 4},
    {id: 3, name: 'Yanfei', weaponId: 3},
    {id: 4, name: 'Rosaria', weaponId: 5},
    {id: 5, name: 'Kuki', weaponId: 1}
]

//creo schema di un character
const CharType = new GraphQLObjectType({
    name: 'Character',
    description: 'This represent a Genshin Impact Character',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        weaponId: {type: new GraphQLNonNull(GraphQLInt)},
        weapon: {
            type: WeaponType,
            resolve: (character) => {
                return weapons.find(weapon => weapon.id === character.weaponId)
            }
        }       
    })
})

//creo schema di una weapon
const WeaponType = new GraphQLObjectType({
    name: 'Weapon',
    description: 'This represent a Genshin Impact Weapon',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        characters: {
            type: new GraphQLList(CharType),
            resolve: () => {
                return characters.filter(character => character.weaponId === weapon.id)
            }
        }  
    })
})

//query
const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        characters: {
            type: new GraphQLList(CharType),
            description: 'List of All Genshin Characters',
            resolve: () => characters
        },
        weapons: {
            type: new GraphQLList(WeaponType),
            description: 'List of All Genshin Weapons',
            resolve: () => weapons
        }
    })
})

//fa funzionare le query su GraphQl
const schema = new GraphQLSchema({
    query: RootQueryType
})

//localhost:5000/graphql?
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true 
}))
app.listen(5000, () => console.log('Server Running'))