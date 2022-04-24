import * as React from 'react';
import styles from './SearchBar.module.css'
import 'material-icons/iconfont/material-icons.css';

interface Props {
    onChange: (string: string) => void
    onSearch: () => void
}

export const SearchBar = ({onChange, onSearch}: Props) => {

    return (
        <div  className={styles.container}>
            <input
                type="text"
                placeholder="Enter the name here"
                onChange={
                    (e) => { onChange(e.target.value) }
                }
            />
            <span className="material-icons-round" onClick={onSearch}>search</span>
        </div>
    )
}