import {ApolloServer} from "apollo-server";
import {resolvers} from "./resolvers/query";
import {typeDefs} from "./schema";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`ISB database connected at ${url}`);
});