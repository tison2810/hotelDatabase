import React from "react";
import { useEffect, useState } from "react";


const Report = () => {
    const [listReport, SetReport] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/report/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                SetReport(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listReport])

    return (
        <div>
            <h1>Report</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Date</td>
                        <td>Status</td>
                        <td>Manager ID</td>
                        <td>Warehouse Code</td>
                        <td>Transportation Code</td>
                    </tr>  
                </thead>
                {listReport.map(report => {
                    return (
                        <tbody>
                            <tr>
                                <td>{report.ID}</td>
                                <td>{report.Ngay_xuat_bien_ban}</td>
                                <td>{report.Tinh_trang}</td>
                                <td>{report.ma_nv_quan_ly_kho}</td>
                                <td>{report.ma_kho}</td>
                                <td>{report.ma_chuyen}</td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </div>
    )
}
export default Report