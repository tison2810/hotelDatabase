import React from "react"
import { SiGoogleanalytics } from "react-icons/si"
import styles from "../../../css/CardDB.module.css"

const CardDB = ({Topic, Cost, Percent, array, offset}) => {
    return (
        <div className={styles.sales}>
                <div className={styles.logo}>
                    <SiGoogleanalytics width={2} height={2} />
                </div>
                <div className={styles.middle}>
                    <div className={styles.left}>
                        <h3>{Topic}</h3>
                        <h1>{Cost}</h1>
                    </div>
                    <div className={styles.progress}>
                            <svg>
                             <circle style={{ strokeDasharray: `${array}`, strokeDashoffset:`${offset}` }} cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div className={styles.number}>
                                <p>{Percent}</p>
                            </div>        
                    </div> 
                </div>
               <small>Last 24 Hours</small>
                       
        </div>
    )
}
export default CardDB