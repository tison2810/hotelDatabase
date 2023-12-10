import React
    from "react"
import styles from "../../../css/InsertForm.module.css"
const FilterByType = () => {
    return (
        <form className={styles.container} action="http://localhost:8080/product/filter" method="GET">
            <div className={styles.form_control}>
                <label for="code">Code Search:</label>
                <input type="text" name="id" id="id" />
            </div>
            <button className={styles.btn} type="submit">Submit</button>
        </form>
    )
}
export default FilterByType