const {gql} = require("apollo-server");
export const typeDefs = gql`
type Planet {
    name: String
}

type Person {
    id: Int!
    name: String
    height: Int
    mass: Int
    gender: String
    homeWorld: Planet
}

type Query {
    people(name: String): [Person]
    planets: [Planet]
}`