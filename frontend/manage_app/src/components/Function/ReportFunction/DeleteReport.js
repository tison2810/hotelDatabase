import React from "react"

const DeleteForm = () => {
    return (
        <form action="http://localhost:8080/report/delete" method="POST">
            <div class="form-control">
                <label for="id">ID Report</label>
                <input type="text" name="id" id="title" />
            </div>
            <button class="btn" type="submit"> Submit </button>
        </form>
    )
}
export default DeleteForm;