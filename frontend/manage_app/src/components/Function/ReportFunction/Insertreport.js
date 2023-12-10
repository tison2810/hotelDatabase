import React from "react"
import styles from "../../../css/InsertForm.module.css"

const InsertForm = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/report/post" method="POST">
            <div className={styles.form_control}>
                <label for="id">ID Report:</label>
                <input type="number" name="id" id="title" />
            </div>
            <div className={styles.form_control}>
                <label for="ngayxuat">Date:</label>
                <input type="date" name="ngayxuat" id="imageUrl" />
            </div>
            <div className={styles.form_control}>
                <label for="tinhtrang">Status:</label>
                <input type="text" name="tinhtrang" id="price" step="0.01" />
            </div>
            <div className={styles.form_control}>
                <label for="manager_id">Manager ID:</label>
                <input type="number" name="manager_id" id="price" step="0.01" />
            </div>  
            <div className={styles.form_control}>
                <label for="warehouse_code">WareHouse Code:</label>
                <input type="number" name="warehouse_code" id="price" step="0.01" />
            </div>  
            <div className={styles.form_control}>
                <label for="transport_code">Transport Code:</label>
                <input type="number" name="transport_code" id="price" step="0.01" />
            </div>  
            <button className={styles.btn} type="submit"> Submit </button>
        </form>
    )
}
export default InsertForm;