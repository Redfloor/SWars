import {peopleConnection} from "./people";
import {planets} from "./planets";


export const resolvers = {
    Query: {
        peopleConnection: peopleConnection,
    },
};