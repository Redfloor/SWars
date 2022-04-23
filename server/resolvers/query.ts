import {people} from "./people";
import {planets} from "./planets";


export const resolvers = {
    Query: {
        people,
        planets,
    },
};