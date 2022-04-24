import {ApolloServer} from "apollo-server";
import {resolvers} from "./resolvers/query";
import {typeDefs} from "./schema";

const server = new ApolloServer({ typeDefs, resolvers });

//not using https://github.com/cfjedimaster/SWAPI-Wrapper because honestly that feels like cheating.

server.listen().then(({ url }) => {
    console.log(`ISB database connected at ${url}`);
});