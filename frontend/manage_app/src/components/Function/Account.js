import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import InsertForm from "./AccountFunction/InsertAccount";
import DeleteForm from "./AccountFunction/DeleteAccount";
import FilterForm from "./AccountFunction/FilterAccount";


const Account = () => {
    const [listAccount, SetListAccount] = useState([])
    const [insertAcc, SetInsertAcc] = useState(false);
    const [deleteAcc, SetDeleteAcc] = useState(false);
    const [filter, SetFilter] = useState(false);


    function InsertAccount() {
        if (insertAcc === false) {
            SetInsertAcc(true)
            SetDeleteAcc(false)
            SetFilter(false)
        }
        else {
            SetInsertAcc(false)
            SetDeleteAcc(false)
            SetFilter(false)
        }
    }

    function DeleteAccount() {
        if (deleteAcc === false) {
            SetDeleteAcc(true)
            SetFilter(false)
            SetInsertAcc(false)
        }
        else {
            SetInsertAcc(false)
            SetDeleteAcc(false)
            SetFilter(false)
        }
    }

    function FilterAccount() {
        if (filter === false) {
            SetFilter(true)
            SetInsertAcc(false)
            SetDeleteAcc(false)
        }
        else {
            SetInsertAcc(false)
            SetDeleteAcc(false)
            SetFilter(false)
        }
    }
    useEffect(() => {
        fetch("http://localhost:8080/account/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListAccount(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listAccount])

    return (
        <div className={styles.container}>
            <h1>Account</h1>
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
                {listAccount.map(account => {
                    return (
                        <tbody>
                            <tr>
                                <td>{account.CCCD}</td>
                                <td>{account.HoTen}</td>
                                <td>{account.Phone}</td>
                                <td>{account.Sex}</td>
                                <td>{account.Email}</td>
                            </tr>
                        </tbody>
                    )
                })}

                </table>
            </main>
            <div className={styles.button_container}>
                <button onClick={InsertAccount} className={styles.button}>Add Account</button>
                <button onClick={DeleteAccount} className={styles.button}>Delete Account</button>
                <button onClick={FilterAccount} className={styles.button}>Search Account</button>
            </div>
            
            {(insertAcc && !deleteAcc && !filter) && <InsertForm/>
            } 
            {(!insertAcc && deleteAcc && !filter) && <DeleteForm/>
            } 
            {(!insertAcc && !deleteAcc && filter) && <FilterForm/>
            } 
        </div>
    )
}
export default Account