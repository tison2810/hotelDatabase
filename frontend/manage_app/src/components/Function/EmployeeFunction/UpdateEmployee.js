import React from "react"
import styles from "../../../css/InsertForm.module.css"

const UpdateForm = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/customer/update" method="POST">
            <div className={styles.form_control}>
                <label for="CCCD">ID:</label>
                <input type="text" name="CCCD" id="price" step="0.01" />
            </div>
            <div className={styles.form_control}>
                <label for="NgaySinh">Birthday:</label>
                <input type="date" name="NgaySinh" id="imageUrl" />
            </div>
            <div className={styles.form_control}>
                <label for="SoDienThoai">Phone:</label>
                <input type="text" name="SoDienThoai" id="price" step="0.01" />
            </div>  
            <div className={styles.form_control}>
                <label for="Email">Email:</label>
                <input type="text" name="Email" id="price" step="0.0s1" />
            </div>  
            <div className={styles.form_control}>
                <label for="Diachi">Address:</label>
                <input type="text" name="Diachi" id="price" step="0.01" />
            </div>  
            <div className={styles.form_control}>
                <label for="MucLuong">Paid:</label>
                <input type="text" name="MucLuong" id="price" step="0.01" />
            </div> 
            <button className={styles.btn} type="submit"> Submit </button>
        </form>
    )
}
export default UpdateForm;