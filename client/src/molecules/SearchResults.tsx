import * as React from 'react'
import {Person, PersonType} from '../atoms/Person';
import {ApolloError} from '@apollo/client';
import styles from './SearchResults.module.css'
import {Loading} from "../atoms/Loading";

export interface Data {
    peopleConnection: {
        totalCount: number
        next: boolean
        edges: [PersonType]
    }
}

interface Props {
    data?: Data
    loading: boolean
    error?: ApolloError
}


export const SearchResults = ({data, loading, error}:Props) => {
    //todo: cool loading simulator
    if (loading) return (
        <Loading />
    )

    if (error || !data || !data.peopleConnection.edges) return (
        <p className={styles.error}>{error?.message || "No Data Found"}</p>
    )

    if (data.peopleConnection.totalCount === null || data.peopleConnection.totalCount === 0) return (
        <p className={styles.message}>No Data Found</p>
    )

    const output = data?.peopleConnection.edges.map(person => <Person {...person} key={`person-${person.id}`}/>)
    return <div className={styles.datagrid}>
        {output}
    </div>
}