import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../css/Part.module.css"
import ReactDOM from "react-dom";


const Booking = () => {
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
        </div>
    )
}

export default Booking