import * as React from "react";
import styles from './PaginationContainer.module.css'

interface Props {
    page: number
    total: number
    load: (page: number) => void
}

export const PaginationContainer = ({page, total, load}:Props) => {
    const pages = total / 10
    let buttons = []
    for (let i = 1; i < pages; i++) {
        buttons.push(
            <button className={i===page ? styles.buttonActive : styles.button} onClick={() => load(i)} key={`load:${i}`}>{i}</button>
        )
    }
    return <div className={styles.paginationContainer}>
        {buttons}
    </div>
}