import React from "react"
import styles from "../css/Aside.module.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDashboard,MdProductionQuantityLimits } from "react-icons/md"
import { BsFillPersonFill } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { MdOutlineLocalHotel } from "react-icons/md";
import { CiLogout } from "react-icons/ci"
import { FaFileWord } from "react-icons/fa"
import {TfiAnnouncement} from "react-icons/tfi"
import { GoListUnordered } from "react-icons/go";
import { FaAddressCard } from "react-icons/fa";
import DashBoard from "./Function/DashBoard";
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import Customer from "../components/Function/Customer"
import Employee from "../components/Function/Employee"
import Product from "../components/Function/Product"
import Report from "../components/Function/Report"
import WareHouse from "../components/Function/Warehouse"
import Account from "../components/Function/Account"
import Order from "../components/Function/Order"
const Aside = () => {
    return (
        
        <div className={styles.container}>
            <aside>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <h1 className={styles.text_muted}>Hierophant<span style={{color:'#32cc4c'}}>Green </span><span>Hotel</span></h1>
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
                            <MdOutlineLocalHotel />
                        </span>
                        <h3>WareHouse</h3>
                    </Link>
                    <Link to='/account'>
                        <span>
                            <FaAddressCard />
                        </span>
                        <h3>Account</h3>
                    </Link>
                    <Link to='/order'>
                        <span>
                        <GoListUnordered />
                        </span>
                        <h3>Order</h3>
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
                    <Route path="/account" element={<Account/>} />
                    <Route path="/order" element={<Order/>} />
            </Routes>

            {/* <div className={styles.right}>
                <div className={styles.top}>
                    <div className={styles.profiles}>
                        <div class="info">
                            <p>Welcome back, <b>Quang Huy</b> </p>
                            <small>Admin</small>
                        </div>
                        <div className={styles.profile_photo}>
                            <img src={require('../image/huy.jpg')} alt='admin'/>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Recent Updates</h2>
                    <div className={styles.updates}>
                        <div className={styles.update}>
                            <div className={styles.profile_photo}>
                                <img src={require('../image/quyen.jpg')} alt='admin'/>
                            </div>
                             <div>
                                <p><b>Quyen Nguyen</b> has update Product with quantity 2</p>
                                <small>Updated 1 weeks ago</small>
                            </div>
                        </div>  
                       
                        <div className={styles.update}>
                            <div className={styles.profile_photo}>
                                <img src={require('../image/khoa.jpg')} alt='admin'/>
                            </div>
                            <div>
                            <p><b>Khoa Anh</b> has update WareHouse with quantity 1</p>
                            <small>Updated 2 weeks ago</small>

                         </div>
                        </div>  
                        
                        <div className={styles.update}>
                            <div className={styles.profile_photo}>
                                <img src={require('../image/dung.jpg')} alt='admin'/>
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
            </div> */}
        </div>
    )
}
export default Aside 