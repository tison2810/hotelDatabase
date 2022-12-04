import React from "react";
import { useEffect, useState } from "react";


const Customer = () => {
    const [listCustomer, SetListCustomer] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/customer/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListCustomer(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listCustomer])

    return (
        <div>
            <h1>Customer</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>CMND</td>
                        <td>Name</td>
                        <td>Mail</td>
                    </tr>  
                </thead>
                {listCustomer.map(customer => {
                    return (
                        <tbody>
                            <tr>
                                <td>{customer.Ma_KH}</td>
                                <td>{customer.CMND}</td>
                                <td>{customer.Ten}</td>
                                <td>{customer.Mail}</td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </div>
    )
}
export default Customer