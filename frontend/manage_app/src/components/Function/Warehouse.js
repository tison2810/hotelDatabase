import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"



const WareHouse = () => {
    const [listWarehouse, SetWarehouse] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/warehouse/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                SetWarehouse(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listWarehouse])
    
    return (
        <div className={styles.container}>
            <h1>Warehouse</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Square</td>
                        <td>Address</td>
                        <td>Province Code</td>
                        <td>Manager ID</td>
                        
                    </tr>  
                </thead>
                {listWarehouse.map(warehouse => {
                    return (
                        <tbody>
                            <tr>
                                <td>{warehouse.Ma_kho}</td>
                                <td>{warehouse.Dien_tich}</td>
                                <td>{warehouse.Dia_chi}</td>
                                <td>{warehouse.ma_tinh}</td>
                                <td>{warehouse.ma_nv_quan_ly_kho}</td>
                            </tr>
                        </tbody>
                    )
                })}

                </table>
            </main>
        </div>
    )
}
export default WareHouse