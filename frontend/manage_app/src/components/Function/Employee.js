import React from "react";
import { useEffect, useState } from "react";


const Employee = () => {
    const [listEmployee, SetListEmployee] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/employee")
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
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Gender</td>
                        <td>Address</td>
                        <td>Number</td>
                    </tr>  
                </thead>
                {listEmployee.map(employee => {
                    return (
                        <tbody>
                            <tr>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.address}</td>
                                <td>{employee.number}</td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </div>
    )
}
export default Employee