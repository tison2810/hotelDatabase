import React from "react"
import styles from "../../css/DashBoard.module.css"
import { SiGoogleanalytics } from "react-icons/si"
import CardDB from "./DashBoardco/CardDB"

const DashBoard = () => {
    return (
        <main>
            <h1>DashBoard</h1>
            <div className={styles.date}>
                <input type="date"/>
            </div>
            <div className={styles.insights}>
                <CardDB/>
            </div>
        </main>
    )
}
export default DashBoard