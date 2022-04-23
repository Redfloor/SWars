import * as React from 'react';
import styles from './Person.module.css'

//Todo: extend this over gql types
interface Props {
    id: string;
    name: string;
    height: number;
    mass: number;
    gender: string;
    homeworld: string;
    coords?: Coords
}

interface Coords {
    lat: number;
    lng: number;
}

const getUnits = (key: keyof Props) => {
    if (key === "mass") return "Kg"
    if (key === "height") return "CM"
    return ""
}

export const Person = (props: Props) => {
    const [expanded, setExpanded] = React.useState(true)
    let Output = Object.keys(props).map(key => {
        if (key === 'id') return undefined;
        if (key === 'coords') return undefined;
        //Todo: handle homeworld over gql
        if (key === 'homeworld') return undefined;
        return (
            <div className={styles.row}>
                <p>{key}:</p>
                {/*@ts-expect-error TS2322*/}
                <p>{`${props[key as keyof Props]}${getUnits(key)}`}</p>
            </div>
        )
        })
    Output=Output.filter(e => e)
    return (
    <div key={props.id} className={styles.box} onClick={()=> setExpanded(!expanded)}>
        {expanded ? Output : Output[0]}
    </div>
    )
}