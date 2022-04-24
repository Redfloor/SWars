import {useState} from 'react'
import { gql, useQuery } from '@apollo/client';
import {SearchBar} from "../atoms/SearchBar";
import {Data, SearchResults} from "./SearchResults";
import {PaginationContainer} from "../atoms/PaginationContainer";

const query = gql`
    query SearchPeople($name: String, $page: Int) {
        peopleConnection(name: $name, page: $page) {
            totalCount
            next
            edges {
                id
                name
                height
                mass
                gender
                homeworld {
                    name
                }
            }
        }
    }
`



export const Search = () => {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const { loading, error, data, fetchMore } = useQuery<Data>(query, {
        variables: { name: search, page: page},
    });
    const load = (page: number) => {
        setPage(page)
        fetchMore({
            query,
            variables:{
                name: search,
                page: page
            }
        })
    }

    return (
        <>
            <SearchBar
                onSearch={setSearch}
                key="SearchBar"
            />
            <SearchResults
                loading={loading}
                error={error}
                data={data}
                key="searchResults"
            />
            <PaginationContainer page={page} total={data?.peopleConnection.totalCount || 0} load={load}/>
        </>
    )
}
