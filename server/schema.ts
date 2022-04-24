const {gql} = require("apollo-server");
export const typeDefs = gql`

    
type PeopleConnection {
    edges: [Person]
    totalCount: Int
    next: Boolean
}
    
type Planet {
    name: String
}

type Person {
    id: Int!
    name: String
    height: String
    mass: String
    gender: String
    homeworld: Planet
}

type Query {
    peopleConnection(name: String, page: Int): PeopleConnection
}`