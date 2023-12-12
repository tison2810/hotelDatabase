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
                <form className={styles2.container} action="" method="POST">
                    <div className={styles2.form_control}>
                        <label for="username">Username:</label>
                        <input type="text" name="username" id="price" step="0.01" />
                    </div>
                    <div className={styles2.form_control}>
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="price" step="0.01" />
                    </div>
                    <div>
                        <button onClick={onConfirm} className={styles.exitbutton}>Exit</button>
                        <button onClick={onConfirm} className={styles.button}>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}

export default NewBooking;
