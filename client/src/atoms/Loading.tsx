import * as React from "react";
import logo from "../resources/empire.svg";
import styles from "./Loading.module.css";

export const Loading = () => {
    return (
        <>
            <img src={logo} className={styles.logo} alt="logo" />
        </>
    )
}