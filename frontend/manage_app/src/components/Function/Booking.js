import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css";


const Booking = () => {

    return (
        <div className={styles.container}>
            <h1>Booking</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
                <div className={styles.flex_container}>
                    <div className={styles.custom_card}>
                        <div>
                            <img src="https://picsum.photos/200/300" alt="img" />
                        </div>
                        <div>
                            <h2>STAND01</h2>
                            <p>Mô tả: Phòng tiêu chuẩn 2 người</p>
                            <p>Số người tối đa: 2</p>
                            <p>Mức giá: 200000</p>
                            <br></br>
                            <button  className={styles.button}>Book</button>
                        </div>
                    </div>
                    <div className={styles.custom_card}>
                        <div>
                            <img src="https://picsum.photos/200/300" alt="img" />
                        </div>
                        <div>
                            <h2>STAND02</h2>
                            <p>Mô tả: Phòng tiêu chuẩn 4 người</p>
                            <p>Số người tối đa: 4</p>
                            <p>Mức giá: 300000</p>
                            <br></br>
                            <button  className={styles.button}>Book</button>
                        </div>
                    </div>
                    <div className={styles.custom_card}>
                        <div>
                            <img src="https://picsum.photos/200/300" alt="img" />
                        </div>
                        <div>
                            <h2>VIP01</h2>
                            <p>Mô tả: Phòng VIP tiêu chuẩn</p>
                            <p>Số người tối đa: 2</p>
                            <p>Mức giá: 600000</p>
                            <br></br>
                            <button  className={styles.button}>Book</button>
                        </div>
                    </div>
                    <div className={styles.custom_card}>
                        <div>
                            <img src="https://picsum.photos/200/300" alt="img" />
                        </div>
                        <div>
                            <h2>VIP02</h2>
                            <p>Mô tả: Phòng VIP cao cấp</p>
                            <p>Số người tối đa: 2</p>
                            <p>Mức giá: 1000000</p>
                            <br></br>
                            <button  className={styles.button}>Book</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Booking