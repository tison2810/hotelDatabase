import React from "react"
import styles from "../../../css/InsertForm.module.css"

const FilterForm = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/report/filter" method="GET">
            <div className={styles.form_control}>
                <label for="id">ID Search:</label>
                <input type="number" name="id" id="title" />
            </div>
            <button className={styles.btn} type="submit"> Submit </button>
        </form>
    )
}
export default FilterForm;