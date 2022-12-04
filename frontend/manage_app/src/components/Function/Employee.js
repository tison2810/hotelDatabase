import React from "react";
import { useEffect, useState } from "react";


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
        <div>
            <h1>Employee</h1>
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
        </div>
    )
}
export default Employee