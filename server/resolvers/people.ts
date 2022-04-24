import fetch from 'node-fetch'

export const peopleConnection = async (parent, args, _context, _info) => {
    let targetApi = "https://swapi.dev/api/people/"
    if (args) {
        const name = args.name;
        const page = args.page;
        if (name && page) {
            targetApi += `?search=${name}&page=${page}`
        } else if (name){
            targetApi += `?search=${name}`
        } else if (page) {
            targetApi+= `?page=${page}`
        }
    }

    const response = await fetch(targetApi,
        {method: 'GET',}).then((res) => {
        return res.json();
    })
    const results = response.results

    return {
        edges: results ? edges(results) : [],
        totalCount: response.count,
        next: response.next !== null
    }
}

export const edges = async (results) => {
    return results.map(async r=> {
        const homeworld = await fetch(r.homeworld,
            {method: 'GET',}).then((res) => {
            return res.json();
        })
        return {
        id:parseInt( r.url.replace('https://swapi.dev/api/people/','')),
        name: r.name,
        height: r.height,
        mass: r.mass,
        gender: r.gender,
            //todo chain resolver
        homeworld: {
            name: homeworld.name
        }
    }})
}