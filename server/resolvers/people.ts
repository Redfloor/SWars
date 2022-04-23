
const testPeople = [{
    id: 1,
    name: "Luke Skywalker",
    height: 177,
    mass: 77,
    gender: "male",
    homeworld: {
        name: "Tatooine",
    }
}, {
    id: 2,
    name: "Leia Organa",
    height: 163,
    mass: 63,
    gender: "female",
    homeworld: {
        name: "Alderaan",
    }
}]

export const people = (parent, args, context, info) => {
    if (args && args.name){
        const name = args.name;
        console.log({name})
        //todo just run this through search, no reason to get fancy with it on this level
        const out = testPeople.filter(person => person.name.indexOf(name) !== -1)
        console.log({out})
        return out;
    }
    return testPeople;
}