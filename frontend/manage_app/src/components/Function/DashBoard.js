import React from "react"
import { SiSalesforce } from "react-icons/si"
import {TfiAnnouncement} from "react-icons/tfi"
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
            <div className={styles.container}>
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
            <div className={styles.right}>
                <div className={styles.top}>
                    <div className={styles.profiles}>
                        <div class="info">
                            <p>Welcome back, <b>Quang Huy</b> </p>
                            <small>Admin</small>
                        </div>
                        <div className={styles.profile_photo}>
                            <img src={require('../../image/huy.jpg')} alt='admin'/>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Recent Updates</h2>
                    <div className={styles.updates}>
                        <div className={styles.update}>
                            <div className={styles.profile_photo}>
                                <img src={require('../../image/quyen.jpg')} alt='admin'/>
                            </div>
                             <div>
                                <p><b>Quyen Nguyen</b> has update Product with quantity 2</p>
                                <small>Updated 1 weeks ago</small>
                            </div>
                        </div>  
                       
                        <div className={styles.update}>
                            <div className={styles.profile_photo}>
                                <img src={require('../../image/khoa.jpg')} alt='admin'/>
                            </div>
                            <div>
                            <p><b>Khoa Anh</b> has update WareHouse with quantity 1</p>
                            <small>Updated 2 weeks ago</small>

                         </div>
                        </div>  
                        
                        <div className={styles.update}>
                            <div className={styles.profile_photo}>
                                <img src={require('../../image/dung.jpg')} alt='admin'/>
                            </div>
                            <div>
                                <p><b>Dung Quoc</b> has delete Employe with quantity 3</p>
                                <small>Updated 1 weeks ago</small> 
                             </div>
                        </div>  
                        
                    </div>
                </div>

                <div className={styles.annoucement}>
                    <div className={styles.annoucetitle}>
                        <h2>Annoucement</h2>
                
                        <TfiAnnouncement style={{width:'30px', height:'25px', color:'green'}} />
                    </div>
                    <div className={styles.note}>
                        <div className={styles.over}>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                <h3>BROKEN TRUNKS</h3>
                                <small>Last 24 hours ago</small>
                            </div>
                            <p>Some Trunks have been broken, fix it quickly</p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                <h3>NEXT MEETING</h3>
                                <small>Last 24 hours ago</small>
                            </div>
                            <p>The next meeting will be occured on Tuesday, 6th December, 2022</p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                <h3>FIRED EMPLOYEE</h3>
                                <small>Last 24 hours ago</small>
                            </div>
                            <p>Elen has been fired for some reason, detail in the next meeting</p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                <h3>NEW SUCCESS</h3>
                                <small>Last 24 hours ago</small>
                            </div>
                            <p>Our Assignment will get High grade</p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.title}>
                                <h3>BE CAREFUL</h3>
                                <small>Last 24 hours ago</small>
                            </div>
                            <p>The new Tower is being builed, don't enter the dangerous place</p>
                        </div>
                        </div>    
                    </div>
                </div>

                <div style={{display:'flex', justifyContent:'center'}}>
                    <div className={styles.buttonAdd}>
                        <button>Add Annoucement</button>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}
export default DashBoard