import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../css/Part.module.css"
import InsertForm from "./EmployeeFunction/InsertEmployee";
import DeleteForm from "./EmployeeFunction/DeleteEmployee";
import FilterForm from "./EmployeeFunction/FilterEmployee";
import UpdateForm from "./EmployeeFunction/UpdateEmployee";


const Booking = () => {
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
            <h1>Booking</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
            <Row xs={1} md={3} lg={4} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>STAND01</Card.Title>
                            <Card.Text>
                                <p>Mô tả: Phòng tiêu chuẩn 2 người</p>
                                <p>Số người tối đa: 2</p>
                                <p>Mức giá: 200000</p>
                            </Card.Text>
                            <button  className={styles.button}>Book</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>STAND02</Card.Title>
                            <Card.Text>
                                <p>Mô tả: Phòng tiêu chuẩn 4 người</p>
                                <p>Số người tối đa: 4</p>
                                <p>Mức giá: 300000</p>
                            </Card.Text>
                            <button  className={styles.button}>Book</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>VIP01</Card.Title>
                            <Card.Text>
                                <p>Mô tả: Phòng VIP tiêu chuẩn</p>
                                <p>Số người tối đa: 2</p>
                                <p>Mức giá: 600000</p>
                            </Card.Text>
                            <button  className={styles.button}>Book</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>VIP02</Card.Title>
                            <Card.Text>
                                <p>Mô tả: Phòng VIP cao cấp</p>
                                <p>Số người tối đa: 2</p>
                                <p>Mức giá: 1000000</p>
                            </Card.Text>
                            <button  className={styles.button}>Book</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
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

export default Booking