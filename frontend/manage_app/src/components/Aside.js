import React from "react"
import styles from "../css/Aside.module.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDashboard,MdProductionQuantityLimits } from "react-icons/md"
import { BsFillPersonFill } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { FaWarehouse } from "react-icons/fa"
import { CiLogout } from "react-icons/ci"
import {FaFileWord} from "react-icons/fa"
import DashBoard from "./Function/DashBoard";
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Customer from "../components/Function/Customer"
import Employee from "../components/Function/Employee"
import Product from "../components/Function/Product"
import Report from "../components/Function/Report"
import WareHouse from "../components/Function/Warehouse"

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
                    <Link to="/">
                        <span>
                            <MdDashboard />
                        </span>
                        <h3>DashBoard</h3>
                    </Link>   
                    <Link to="/customer" className={styles.active}>
                        <span>
                            <FiUsers />
                        </span>
                        <h3>Customer</h3>
                    </Link>   
                    <Link to="/report">
                        <span>
                            <FaFileWord />
                        </span>
                        <h3>Report</h3>
                    </Link>   
                    <Link to='/product'>
                        <span>
                            <MdProductionQuantityLimits />
                        </span>
                        <h3>Products</h3>
                    </Link>   
                    <Link to='/employees'>
                        <span>
                            <BsFillPersonFill />
                        </span>
                        <h3>Employees</h3>
                    </Link>   
                     <Link to='/warehouse'>
                        <span>
                            <FaWarehouse />
                        </span>
                        <h3>WareHouse</h3>
                    </Link>
                    <a href="#">
                        <span>
                            <CiLogout />
                        </span>
                        <h3>Logout</h3>
                    </a>
                    
                </div>
                
                
            </aside>
            <Routes>
                    <Route path="/" element={<DashBoard/>} />
                    <Route path="/customer" element={<Customer/>} />
                    <Route path="/report" element={<Report/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/employees" element={<Employee />} />
                    <Route path="/warehouse" element={<WareHouse/>} />
            </Routes>

            <div className={styles.right}>
                <div className={styles.top}>
                    <div className={styles.profiles}>
                        <div class="info">
                            <p>Welcome back, <b></b> </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aside 