import React from "react"
import styles from "../../../css/Delivery.module.css"

const DeliveryDB = () => {
    return (
        <div className={styles.recent_deli}>
            <h2 style={{marginBottom:'2rem'}}>Recent Manager</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Number</th>
                        <th>Mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2012504</td>
                        <td>Quang Huy</td>
                        <td>Male</td>
                        <td>0854001109</td>
                        <td>huy.dangquang@hcmut.edu.vn</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2012360</td>
                        <td>Tuan Quyen</td>
                        <td>Male</td>
                        <td>0917988527</td>
                        <td>tuan.nguyenquyen@hcmut.edu.vn</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2012504</td>
                        <td>Anh Khoa</td>
                        <td>Male</td>
                        <td>0944234342</td>
                        <td>khoa.nguyen@hcmut.edu.vn</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2011026</td>
                        <td>Quoc Dung</td>
                        <td>Male</td>
                        <td>0849123456</td>
                        <td>dung.quoc@hcmut.edu.vn</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2012924</td>
                        <td>Tien Dat</td>
                        <td>Male</td>
                        <td>084912336</td>
                        <td>dat.luonghongtien@hcmut.edu.vn</td>
                    </tr>
                </tbody>
            </table>
            <a href="#">Show All</a>


        </div>
    )
}
export default DeliveryDB