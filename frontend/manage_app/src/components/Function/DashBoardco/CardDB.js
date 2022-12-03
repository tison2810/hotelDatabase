import React from "react"
import { SiGoogleanalytics } from "react-icons/si"
import styles from "../../../css/CardDB.module.css"

const CardDB = () => {
    return (
        <div class='sales'>
                    <span>
                        <SiGoogleanalytics />
                    </span>
                    <div className={styles.middle}>
                        <div className={styles.left}>
                            <h3>Total Sales</h3>
                            <h1>$25,024</h1>
                        </div>
                        <div className={styles.progress}>
                            <svg>
                                <circle cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div className={styles.number}>
                                <p>81%</p>
                    </div>
                    <small>Last 24 Hours</small>
                        </div>
                    </div>
        </div>
    )
}
export default CardDB