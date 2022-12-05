import React from "react"

const InsertForm = () => {
    return (
        <form action="http://localhost:8080/report/post" method="POST">
            <div class="form-control">
                <label for="id">ID Report</label>
                <input type="text" name="id" id="title" />
            </div>
            <div class="form-control">
                <label for="ngayxuat">Date</label>
                <input type="date" name="ngayxuat" id="imageUrl" />
            </div>
            <div class="form-control">
                <label for="tinhtrang">Status</label>
                <input type="text" name="tinhtrang" id="price" step="0.01" />
            </div>
            <div class="form-control">
                <label for="manager_id">Manager ID</label>
                <input type="number" name="manager_id" id="price" step="0.01" />
            </div>  
            <div class="form-control">
                <label for="warehouse_code">WareHouse Code</label>
                <input type="number" name="warehouse_code" id="price" step="0.01" />
            </div>  
            <div class="form-control">
                <label for="transport_code">Transport Code</label>
                <input type="number" name="transport_code" id="price" step="0.01" />
            </div>  
            <button class="btn" type="submit"> Submit </button>
        </form>
    )
}
export default InsertForm;