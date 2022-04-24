import * as React from 'react';
import styles from './Person.module.css'

export interface PersonType {
    id: string;
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: {
        name: string
    }
}


const getUnits = (key: keyof PersonType, value?: string | number) => {
    if (value === "unknown") return ""
    if (key === "mass") return " Kg"
    if (key === "height") return " CM"
    return ""
}

export const Person = (props: PersonType) => {
    //todo: Pretty dynamic height nonsense
    // const [expanded, setExpanded] = React.useState(true)
    let Output = Object.keys(props).map(key => {
        if (key === "__typename" || key === 'id') {
            return undefined;
        }
        if (key === 'homeworld') {
            return <div className={styles.row} key={`${props.id}-homeworld`}>
                <p>{key}:</p>
                <p>{`${props.homeworld.name}`}</p>
            </div>
        }
        return (
            <div className={styles.row}  key={`${props.id}-${key}`}>
                <p>{key}:</p>
                {/*@ts-expect-error TS2322*/}
                <p>{`${props[key]}${getUnits(key, props[key])}`}</p>
            </div>
        )
        })
    Output=Output.filter(e => e)
    return (
    <div
        key={props.id}
        className={styles.box}
        // onClick={()=> setExpanded(!expanded)}
    >
        {Output}
    </div>
    )
}