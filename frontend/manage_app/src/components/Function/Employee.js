import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"


const Employee = () => {
    const [listEmployee, SetListEmployee] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/employee/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListEmployee(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listEmployee])

    return (
       <div className={styles.container}>
            <h1>Employee</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>CMND</td>
                        <td>Name</td>
                        <td>Phone Number</td>
                    </tr>  
                </thead>
                {listEmployee.map(employee => {
                    return (
                        <tbody>
                            <tr>
                                <td>{employee.Ma_NV}</td>
                                <td>{employee.CMND}</td>
                                <td>{employee.Ten}</td>
                                <td>{employee.So_dien_thoai}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
            </main>
        </div>
    )
}
export default Employee