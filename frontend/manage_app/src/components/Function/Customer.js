import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import InsertForm from "./CustomerFunction/InsertCustomer";
import DeleteForm from "./CustomerFunction/DeleteCustomer";
import FilterForm from "./CustomerFunction/FilterCustomer";


const Customer = () => {
    const [listCustomer, SetListCustomer] = useState([])
    const [insertCus, SetInsertCus] = useState(false);
    const [deleteCus, SetDeleteCus] = useState(false);
    const [filter, SetFilter] = useState(false);


    function InsertCustomer() {
        if (insertCus === false) {
            SetInsertCus(true)
            SetDeleteCus(false)
            SetFilter(false)
        }
        else {
            SetInsertCus(false)
            SetDeleteCus(false)
            SetFilter(false)
        }
    }

    function DeleteCustomer() {
        if (deleteCus === false) {
            SetDeleteCus(true)
            SetFilter(false)
            SetInsertCus(false)
        }
        else {
            SetInsertCus(false)
            SetDeleteCus(false)
            SetFilter(false)
        }
    }

    function FilterCustomer() {
        if (filter === false) {
            SetFilter(true)
            SetInsertCus(false)
            SetDeleteCus(false)
        }
        else {
            SetInsertCus(false)
            SetDeleteCus(false)
            SetFilter(false)
        }
    }
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
        <div className={styles.container}>
            <h1>Customer</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Sex</td>
                        <td>Email</td>
                    </tr>  
                </thead>
                {listCustomer.map(customer => {
                    return (
                        <tbody>
                            <tr>
                                <td>{customer.CCCD}</td>
                                <td>{customer.HoTen}</td>
                                <td>{customer.Phone}</td>
                                <td>{customer.Sex}</td>
                                <td>{customer.Email}</td>
                            </tr>
                        </tbody>
                    )
                })}

                </table>
            </main>
            <div className={styles.button_container}>
                <button onClick={InsertCustomer} className={styles.button}>Add Customer</button>
                <button onClick={DeleteCustomer} className={styles.button}>Delete Customer</button>
                <button onClick={FilterCustomer} className={styles.button}>Search Customer</button>
            </div>
            
            {(insertCus && !deleteCus && !filter) && <InsertForm/>
            } 
            {(!insertCus && deleteCus && !filter) && <DeleteForm/>
            } 
            {(!insertCus && !deleteCus && filter) && <FilterForm/>
            } 
        </div>
    )
}
export default Customer