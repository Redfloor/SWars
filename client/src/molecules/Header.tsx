import * as React from 'react'
import logo from "../resources/empire.svg";
import styles from './Header.module.css'
import classnames from 'classnames'

export const Header = () => {
    return (
        <header className={styles.container}>
            <img src={logo} className={styles.logo} alt="logo" />
            <p className={classnames("font-SF", styles.title)}>Imperial Security Beareau personnel database</p>
        </header>
    )
}