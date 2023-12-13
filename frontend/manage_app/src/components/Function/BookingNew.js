// Trong component NewBooking.js
import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css";
import styles2 from "../../css/InsertForm.module.css"

function NewBooking({ onConfirm }) {
    useEffect(() => {
        const unloadListener = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', unloadListener);
        return () => {
            window.removeEventListener('beforeunload', unloadListener);
        };
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <h1 className={styles.title}>New Booking</h1>
                <form className={styles2.container} action="http://localhost:8080/booking/post" method="POST">
                    <div className={styles2.form_control}>
                        <label for="username">Username:</label>
                        <input type="text" name="username" id="price" step="0.01" />
                    </div>
                    <div className={styles2.form_control}>
                        <label for="MaSoLDP">Order ID:</label>
                        <input type="text" name="MaSoLDP" id="price" step="0.01" />
                    </div>
                    <div className={styles2.form_control}>
                        <label for="MaCN">Apartment ID:</label>
                        <input type="text" name="MaCN" id="price" step="0.01" />
                    </div>
                    <div className={styles2.form_control}>
                        <label for="TenPhong">Room Name:</label>
                        <input type="text" name="TenPhong" id="price" step="0.01" />
                    </div>
                    <div className={styles2.form_control}>
                        <label for="ThoiGianNhanP">Checkin:</label>
                        <input type="datetime-local" name="ThoiGianNhanP" id="price" step="0.01" />
                    </div>
                    <div className={styles2.form_control}>
                        <label for="ThoiGianTraP">Checkout:</label>
                        <input type="datetime-local" name ="ThoiGianTraP" id="price" step="0.01" />
                    </div>
                    <div className={styles2.form_control}>
                        <label for="CCCDLT">Reception ID:</label>
                        <input type="number" name="CCCDLT" id="price" step="0.01" />
                    </div>
                    <div>
                        <button onClick={onConfirm} className={styles.exitbutton}>Exit</button>
                        <button onClick={onConfirm} type = "submit" className={styles.button}>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}

export default NewBooking;
