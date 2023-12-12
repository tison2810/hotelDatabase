import React from "react"
import styles from "../../../css/InsertForm.module.css"
const DeleteForm = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/customer/delete" method="POST">
            <div className={styles.form_control}>
                <label for="TenDangNhap">Username:</label>
                <input type="text" name="TenDangNhap" id="title" />
            </div>
            <button className={styles.btn} type="submit"> Submit </button>
        </form>
    )
}
export default DeleteForm;