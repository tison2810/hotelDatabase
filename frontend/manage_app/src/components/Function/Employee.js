import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import InsertForm from "./EmployeeFunction/InsertEmployee";
import DeleteForm from "./EmployeeFunction/DeleteEmployee";
import FilterForm from "./EmployeeFunction/FilterEmployee";
import UpdateForm from "./EmployeeFunction/UpdateEmployee";


const Employee = () => {
    const [listEmployee, SetListEmployee] = useState([])
    const [insertEmp, SetInsertEmp] = useState(false);
    const [deleteEmp, SetDeleteEmp] = useState(false);
    const [updateEmp, SetUpdateEmp] = useState(false);
    const [filter, SetFilter] = useState(false);


    function InsertEmployee() {
        if (insertEmp === false) {
            SetInsertEmp(true)
            SetDeleteEmp(false)
            SetFilter(false)
            SetUpdateEmp(false)
        }
        else {
            SetInsertEmp(false)
            SetDeleteEmp(false)
            SetFilter(false)
            SetUpdateEmp(false)
        }
    }

    function DeleteEmployee() {
        if (deleteEmp === false) {
            SetDeleteEmp(true)
            SetFilter(false)
            SetInsertEmp(false)
            SetUpdateEmp(false)
        }
        else {
            SetInsertEmp(false)
            SetDeleteEmp(false)
            SetFilter(false)
            SetUpdateEmp(false)
        }
    }

    function FilterEmployee() {
        if (filter === false) {
            SetFilter(true)
            SetInsertEmp(false)
            SetDeleteEmp(false)
            SetUpdateEmp(false)
        }
        else {
            SetInsertEmp(false)
            SetDeleteEmp(false)
            SetFilter(false)
            SetUpdateEmp(false)
        }
    }

    function UpdateEmployee() {
        if (updateEmp === false) {
            SetFilter(false)
            SetInsertEmp(false)
            SetDeleteEmp(false)
            SetUpdateEmp(true)
        }
        else {
            SetInsertEmp(false)
            SetDeleteEmp(false)
            SetFilter(false)
            SetUpdateEmp(false)
        }
    }

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
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Sex</td>
                        <td>Email</td>
                    </tr>  
                </thead>
                {listEmployee.map(employee => {
                    return (
                        <tbody>
                            <tr>
                                <td>{employee.CCCD}</td>
                                <td>{employee.HoTen}</td>
                                <td>{employee.SoDienThoai}</td>
                                <td>{employee.GioiTinh}</td>
                                <td>{employee.Email}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
            </main>
            <div className={styles.button_container}>
                <button onClick={InsertEmployee} className={styles.button}>Add Employee</button>
                <button onClick={DeleteEmployee} className={styles.button}>Delete Employee</button>
                <button onClick={FilterEmployee} className={styles.button}>Search Employee</button>
                <button onClick={UpdateEmployee} className={styles.button}>Update Employee</button>
            </div>
            
            {(insertEmp && !deleteEmp && !filter && !updateEmp) && <InsertForm/>
            } 
            {(!insertEmp && deleteEmp && !filter && !updateEmp) && <DeleteForm/>
            } 
            {(!insertEmp && !deleteEmp && filter && !updateEmp) && <FilterForm/>
            } 
            {(!insertEmp && !deleteEmp && !filter && updateEmp) && <UpdateForm/>
            }
        </div>
    )
}
export default Employee