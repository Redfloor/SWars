import {useState} from 'react'
import { gql, useQuery } from '@apollo/client';
import {SearchBar} from "../Atoms/SearchBar";
import {SearchResults} from "./SearchResults";

const query = gql`
    query SearchPeople($name: String) {
        people(name: $name) {
            id
            name
            height
            mass
            gender
            homeWorld {
                name
            }
        }
    }
`

export const Search = () => {
    const [search, setSearch] = useState("")
    const { loading, error, data, fetchMore } = useQuery(query, {
        variables: { name: search },
    });

    return (
        <>
            <SearchBar
                onChange={setSearch}
                onSearch={() => {
                    fetchMore({
                        variables: {
                            offset: data.feed.length
                        }})
                }}
            />
            <SearchResults loading={loading} error={error} data={data} key="searchResults"/>
        </>
    )
}
