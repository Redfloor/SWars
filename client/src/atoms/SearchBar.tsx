import {useState} from 'react';
import styles from './SearchBar.module.css'
import 'material-icons/iconfont/material-icons.css';


interface Props {
    onSearch: (string: string) => void
}

export const SearchBar = ({onSearch}: Props) => {
    const [search, setSearch] = useState("")

    return (
        <div className={styles.container} onKeyPress={(e => {
            if (e.key === "Enter") {
                onSearch(search)
            }
        })}>
            <input
                type="text"
                placeholder="Enter the name here"
                onChange={
                    (e) => {
                        e.preventDefault()
                        setSearch(e.target.value)
                    }
                }
            />
            <button className="material-icons-round" onClick={() => onSearch(search)} type={"button"}>search</button>
        </div>
    )
}