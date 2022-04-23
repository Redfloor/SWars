import * as React from 'react';
import styles from './SearchBar.module.css'
import 'material-icons/iconfont/material-icons.css';

export const SearchBar = () => {

    return (
        <div  className={styles.container}>
            <input type="text" placeholder="Enter the name or dossier # here"/>
            <span className="material-icons-round">search</span>
        </div>
    )
}