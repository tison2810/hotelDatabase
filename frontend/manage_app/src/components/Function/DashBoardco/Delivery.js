import React from "react"
import styles from "../../../css/Delivery.module.css"

const DeliveryDB = () => {
    return (
        <div className={styles.recent_deli}>
            <h2 style={{marginBottom:'2rem'}}>Recent Delivery</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Reciever</th>
                        <th>Driver</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Quang Huy</td>
                        <td>Tuan Quyen</td>
                        <td>Anh Khoa</td>
                        <td>20/10/2022</td>
                        <td>Reaching</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Quang Huy</td>
                        <td>Tuan Quyen</td>
                        <td>Anh Khoa</td>
                        <td>20/10/2022</td>
                        <td>Reaching</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Quang Huy</td>
                        <td>Tuan Quyen</td>
                        <td>Anh Khoa</td>
                        <td>20/10/2022</td>
                        <td>Reaching</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Quang Huy</td>
                        <td>Tuan Quyen</td>
                        <td>Anh Khoa</td>
                        <td>20/10/2022</td>
                        <td>Reaching</td>
                    </tr>
                </tbody>
                <tbody className={styles.last_child}>
                    <tr>
                        <td>Quang Huy</td>
                        <td>Tuan Quyen</td>
                        <td>Anh Khoa</td>
                        <td>20/10/2022</td>
                        <td>Reaching</td>
                    </tr>
                </tbody>
            </table>
            <a href="#">Show All</a>


        </div>
    )
}
export default DeliveryDB