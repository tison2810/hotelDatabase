import React from "react"
import styles from "../../../css/InsertForm.module.css"

const InsertForm = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/employee/post" method="POST">
            <div className={styles.form_control}>
                <label for="CCCD">ID:</label>
                <input type="number" name="CCCD" id="title" />
            </div>
            <div className={styles.form_control}>
                <label for="CCCD_Mgr">Manger ID:</label>
                <input type="number" name="CCCD_Mgr" id="title" />
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
            <div className={styles.form_control}>
                <label for="Diachi">Address:</label>
                <input type="text" name="Diachi" id="price" step="0.01" />
            </div>  
            <div className={styles.form_control}>
                <label for="MaCN">Apartment ID:</label>
                <input type="text" name="MaCN" id="price" step="0.01" />
            </div> 
            <div className={styles.form_control}>
                <label for="MucLuong">Salary:</label>
                <input type="text" name="MucLuong" id="price" step="0.01" />
            </div>
            <div className={styles.form_control}>
                <label for="ChucVu">Rank:</label>
                <li>
                    <select name="ChucVu">
                        <option value="1">Manager</option>
                        <option value="2">Reception</option>
                        <option value="3">Servant</option>
                    </select>
                </li>
            </div>
            <button className={styles.btn} type="submit"> Submit </button>
        </form>
    )
}
export default InsertForm;