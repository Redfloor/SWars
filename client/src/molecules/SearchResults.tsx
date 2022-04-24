import * as React from 'react'
import {Person, PersonType} from '../Atoms/Person';
import {ApolloError} from '@apollo/client';
import styles from './SearchResults.module.css'

interface Props {
    data: {people?: [PersonType]}
    loading: boolean
    error?: ApolloError
}

export const SearchResults = ({data, loading, error}:Props) => {
    console.log({loading, error, data})
    //todo: cool loading simulator
    if (loading) return (
        <p>LOADING</p>
    )

    if (error) return (
        <p>cool error page goes here</p>
    )

    const output = data?.people?.map(person => <Person {...person}/>)

    return <div className={styles.datagrid}>
        {output}
    </div>
}