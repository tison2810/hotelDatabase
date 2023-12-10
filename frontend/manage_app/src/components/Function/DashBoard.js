import React from "react"
import { SiSalesforce } from "react-icons/si"
import styles from "../../css/DashBoard.module.css"
//import { SiGoogleanalytics } from "react-icons/si"
import CardDB from "./DashBoardco/CardDB"
import DeliveryDB from "./DashBoardco/DeliveryDB"

const DashBoard = () => {
    const CardDataSet = [
        {
            Topic: "Total Sales",
            Cost: '25,048',
            Percent: '81%',
            array: 110,
            offset: 30,
        },
        {
            Topic: "Total Cost",
            Cost: '15,000',
            Percent: '51%',
            array: 90,
            offset: 40,  
        },
        {
            Topic: "Total Profit",
            Cost: '10,048',
            Percent: '40%',
            array: 105,
            offset: 92,  
        }
    ]
    return (
        <main>
            <h1>DashBoard</h1>
            <div className={styles.date}>
                <input type="date"/>
            </div>
            <div className={styles.insights}>
            {CardDataSet.map(card =>{
                return(
                    <div>
                        <CardDB Topic={card.Topic} Cost={card.Cost} Percent={card.Percent} array={card.array} offset={card.offset} />
                    </div>
                )  
            })}
                
            </div>
            <DeliveryDB/>
        </main>
    )
}
export default DashBoard