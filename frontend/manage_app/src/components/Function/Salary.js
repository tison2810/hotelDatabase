import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import styles2 from "../../css/InsertForm.module.css"
// import FilterForm from "./SalaryFunction/SalarySearch";

const Salary = () => {
    const [listSalary, SetListSalary] = useState([]);
    const [salary, setSalary] = useState('');

    const fetchSalaryData = (salary) => {
        fetch(`http://localhost:8080/salary/get?MucLuong=${salary}`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch salary status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListSalary(resData);
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchSalaryData(salary);
    };

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
    };

    const salaryData = listSalary.filter(Array.isArray)[0];
    return (
       <div className={styles.container}>
            <h1>Salary</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <form className={styles2.container} onSubmit={handleFormSubmit}>
                <div className={styles2.form_control}>
                    <label for="MucLuong">Salary:</label>
                    <input type="number" name="MucLuong" id="title" onChange={handleSalaryChange} />
                </div>
                <button className={styles.button} type="submit" > Submit </button>
            </form>
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
                {salaryData && salaryData.map((salary, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{salary.CCCD}</td>
                                <td>{salary.HoTen}</td>
                                <td>{salary.NgaySinh}</td>
                                <td>{salary.GioiTinh}</td>
                                <td>{salary.SoDienThoai}</td>
                                <td>{salary.Email}</td>
                                <td>{salary.MaCN}</td>
                                <td>{salary.MucLuong}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
            </main>
            {/* <div className={styles.button_container}>
                <button onClick={FilterSalary} className={styles.button}>Search Salary</button>
            </div>
            {filter && <FilterForm/>
            }  */}
        </div>
    )
}
export default Salary