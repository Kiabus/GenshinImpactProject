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
    {id: 1, name: 'Mistsplitter Reforged', typeId: 1},
    {id: 2, name: 'Thundering Pulse', typeId: 2},
    {id: 3, name: 'The Widsith', typeId: 3},
    {id: 4, name: 'Redhorn Stonethresher', typeId: 4},
    {id: 5, name: 'Favonious Lance', typeId: 5}
]

const characters = [
    {id: 1, name: 'Fischl', weaponId: 2, typeId: [1, 2, 3]},
    {id: 2, name: 'Noelle', weaponId: 4, typeId: [1, 2, 3, 4]},
    {id: 3, name: 'Yanfei', weaponId: 3, typeId: [1, 2]},
    {id: 4, name: 'Rosaria', weaponId: 5, typeId: [1, 3]},
    {id: 5, name: 'Kuki', weaponId: 1, typeId: [4]}
]

const charTypes = [
    {id: 1, name: 'Main DPS'},
    {id: 2, name: 'Sub DPS'},
    {id: 3, name: 'Support'},
    {id: 4, name: 'Healer'}
]

const weaponTypes = [
    {id: 1, name: 'Sword'},
    {id: 2, name: 'Bow'},
    {id: 3, name: 'Catalyst'},
    {id: 4, name: 'Claymore'},
    {id: 5, name: 'Polearm'}
]

//creo schema di un character
const Character = new GraphQLObjectType({
    name: 'Character',
    description: 'This represent a Genshin Impact Character',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        /*typeId: {type: new GraphQLNonNull(GraphQLInt)},
        charType: {
            type: CharType,
            resolve: (character) => {
                return charTypes.find(charType => charType.id === character.typeId)
            }
        },*/
        weaponId: {type: new GraphQLNonNull(GraphQLInt)},
        weapon: {
            type: Weapon,
            resolve: (character) => {
                return weapons.find(weapon => weapon.id === character.weaponId)
            }
        }       
    })
})

//creo schema di una weapon
const Weapon = new GraphQLObjectType({
    name: 'Weapon',
    description: 'This represent a Genshin Impact Weapon',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        character: {
            type: new GraphQLList(Character),
            resolve: (weapon) => {
            return characters.filter(character => character.weaponId === weapon.id)
            }
        }  
    })
})

//creo schema di un tipo character
const CharacterType = new GraphQLObjectType({
    name: 'CharacterType',
    description: 'This represent a Genshin Impact character type',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        character: {
            type: new GraphQLList(Character),
            resolve: (charType) => {
                return characters.filter(character => character.typeId === charType.id)
            }
        }
    })
})

//creo schema di un tipo weapon
const WeaponType = new GraphQLObjectType({
    name: 'WeaponType',
    description: 'This represent a Genshin Impact weapon type',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        weapon: {
            type: new GraphQLList(Weapon),
            resolve: (weaponType) => {
                return weapons.filter(weapon => weapon.typeId === weaponType.id)
            }
        }
    })
})

//query
const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        character: { //one character
            type: Character,
            description: 'A character of Genshin Impact',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => characters.find(character => character.id === args.id)
        },
        characters: { //all characters
            type: new GraphQLList(Character),
            description: 'List of All Genshin Characters',
            resolve: () => characters
        },
        charTypes: { //all character types
            type: new GraphQLList(CharacterType),
            description: 'List of character types',
            resolve: () => charTypes
        },
        weapon: { //one weapon
            type: Weapon,
            description: 'A weapon of Genshin Impact',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => weapons.find(weapon => weapon.id === args.id)
        },
        weapons: { //all weapons
            type: new GraphQLList(Weapon),
            description: 'List of All Genshin Weapons',
            resolve: () => weapons
        },
        weaponTypes: { //all weapon types
            type: new GraphQLList(WeaponType),
            description: 'List of weapon types',
            resolve: () => weaponTypes
        }
    })
})

//mutation
const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addCharacter: {
            type: Character,
            description: 'Add a character',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                weaponId: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => { //creo il character
                const character = { id: characters.lenght + 1, name: args.name, weaponId: args.weaponId }
                characters.push(character)
                return character
            }
        },
        addWeapon: {
            type: Weapon,
            description: 'Add a weapon',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => { //creo il character
                const weapon = { id: weapons.lenght + 1, name: args.name }
                weapons.push(weapon)
                return weapon
            }
        }
    })
})

//schema di GraphQl, raggruppa le query e le mutation
const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

//localhost:5000/graphql?
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true 
}))
app.listen(5000, () => console.log('Server Running'))