import * as React from 'react'
import {Person} from "../Atoms/Person";
import {SearchBar} from "../Atoms/SearchBar";

export const Search = () => {
        const testPerson = {
            id: "0",
            name: "Luke Skywalker",
            height: 172,
            mass: 77,
            gender: "male",
            homeworld: "Tatooine",
        }

    return (
        <>
            <SearchBar />
            <Person {...testPerson} />
        </>
    )
}
