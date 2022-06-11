import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "../src/schema.graphql";

const resolvers = {
    Query: {
        name: () => 'Fischl',
    }
}

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
