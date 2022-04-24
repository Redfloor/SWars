const testPlanets = [{
    name: "Tatooine",
}, {
    name: "Kamino",
}]

export const planets = (parent, _args, _context, _info) => {
    if (parent) {
        console.log({parent})
    }
    return testPlanets;
}