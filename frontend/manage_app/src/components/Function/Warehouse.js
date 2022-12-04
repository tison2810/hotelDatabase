import React from "react";
import { useEffect, useState } from "react";


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
        <div>
            <h1>WareHouse</h1>
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
                                <td>{warehouse.Ma_Kho}</td>
                                <td>{warehouse.Dien_tich}</td>
                                <td>{warehouse.Dia_chi}</td>
                                <td>{warehouse.ma_tinh}</td>
                                <td>{warehouse.ma_nv_quan_ly_kho}</td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </div>
    )
}
export default WareHouse