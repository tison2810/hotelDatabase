import React from "react"
import styles from "../../../css/InsertForm.module.css"
const DeleteForm = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/employee/delete" method="POST">
            <div className={styles.form_control}>
                <label for="CCCD">ID Delete:</label>
                <input type="number" name="CCCD" id="title" />
            </div>
            <button className={styles.btn} type="submit"> Submit </button>
        </form>
    )
}
export default DeleteForm;