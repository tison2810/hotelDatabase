import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import FilterForm from "./OrderFunction/OrderSearch";

const Salary = () => {
    const [listSalary, SetListSalary] = useState([])
    const [filter, SetFilter] = useState(false);

    function FilterSalary() {
        if (filter === false) {
            SetFilter(true)
        }
        else {
            SetFilter(false)
        }
    }

    useEffect(() => {
        fetch("http://localhost:8080/salary/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch salary status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListSalary(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listSalary])

    return (
       <div className={styles.container}>
            <h1>Salary</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Birthday</td>
                        <td>Sex</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Apartment ID</td>
                        <td>Salary</td>
                    </tr>  
                </thead>
                {listSalary.map(salary => {
                    return (
                        <tbody>
                            <tr>
                                <td>{salary.CCCD}</td>
                                <td>{salary.HoTen}</td>
                                <td>{salary.SoDienThoai}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
            </main>
            <div className={styles.button_container}>
                <button onClick={FilterSalary} className={styles.button}>Search Salary</button>
            </div>
            {filter && <FilterForm/>
            } 
        </div>
    )
}
export default Salary