import React from "react"
import styles from "../css/Aside.module.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDashboard,MdProductionQuantityLimits } from "react-icons/md"
import { BsFillPersonFill } from "react-icons/bs"
import { CiDeliveryTruck } from "react-icons/ci"
import { FiUsers } from "react-icons/fi"
import { FaWarehouse } from "react-icons/fa"
import { GrFormAdd } from "react-icons/gr"
import {CiLogout} from "react-icons/ci"

const Aside = () => {
    return (
        <div className={styles.container}>
            <aside>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <h1 className={styles.text_muted}>Tran<span style={{color:'#32cc4c'}}>sportation</span></h1>
                    </div> 
                    <div className={styles.close} id="close-btn">
                        <AiOutlineCloseCircle />
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <a href="#">
                        <span>
                            <MdDashboard />
                        </span>
                        <h3>DashBoard</h3>
                    </a>   
                    <a href="#" className={styles.active}>
                        <span>
                            <FiUsers />
                        </span>
                        <h3>Customer</h3>
                    </a>   
                    <a href="#">
                        <span>
                            <CiDeliveryTruck />
                        </span>
                        <h3>Delivery</h3>
                    </a>   
                    <a href="#">
                        <span>
                            <MdProductionQuantityLimits />
                        </span>
                        <h3>Products</h3>
                    </a>   
                    <a href="#">
                        <span>
                            <BsFillPersonFill />
                        </span>
                        <h3>Employees</h3>
                    </a>   
                     <a href="#">
                        <span>
                            <FaWarehouse />
                        </span>
                        <h3>WareHouse</h3>
                    </a>
                    <a href="#">
                        <span>
                            <GrFormAdd />
                        </span>
                        <h3>Add product</h3>
                    </a>
                    <a href="#">
                        <span>
                            <CiLogout />
                        </span>
                        <h3>Logout</h3>
                    </a>
                    
                </div>
                
            </aside>

        </div>
    )
}
export default Aside 