import React from "react"
import styles from "../../../css/InsertForm.module.css"

const InsertForm = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/customer/post" method="POST">
            <div className={styles.form_control}>
                <label for="CCCD">ID:</label>
                <input type="number" name="CCCD" id="title" />
            </div>
            <div className={styles.form_control}>
                <label for="HoTen">Name:</label>
                <input type="text" name="HoTen" id="price" step="0.01" />
            </div>
            <div className={styles.form_control}>
                <label for="NgaySinh">Birthday:</label>
                <input type="date" name="NgaySinh" id="imageUrl" />
            </div>
            <div className={styles.form_control}>
                <label for="SoDienThoai">Phone:</label>
                <input type="number" name="SoDienThoai" id="price" step="0.01" />
            </div>  
            <div className={styles.form_control}>
                <label for="GioiTinh">Sex:</label>
                <input type="text" name="GioiTinh" id="price" step="0.01" />
            </div>  
            <div className={styles.form_control}>
                <label for="Email">Email:</label>
                <input type="text" name="Email" id="price" step="0.01" />
            </div>  
            <button className={styles.btn} type="submit"> Submit </button>
        </form>
    )
}
export default InsertForm;