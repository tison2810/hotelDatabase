import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import FilterForm from "./OrderFunction/OrderSearch";

const Order = () => {
    const [listOrder, SetListOrder] = useState([])
    const [filter, SetFilter] = useState(false);

    function FilterOrder() {
        if (filter === false) {
            SetFilter(true)
        }
        else {
            SetFilter(false)
        }
    }

    useEffect(() => {
        fetch("http://localhost:8080/order/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch order status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListOrder(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listOrder])

    return (
       <div className={styles.container}>
            <h1>Order</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>Room ID</td>
                        <td>Price</td>
                        <td>Quantity</td>
                    </tr>  
                </thead>
                {listOrder.map(order => {
                    return (
                        <tbody>
                            <tr>
                                <td>{order.CCCD}</td>
                                <td>{order.HoTen}</td>
                                <td>{order.SoDienThoai}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
            </main>
            <div className={styles.button_container}>
                <button onClick={FilterOrder} className={styles.button}>Search Order</button>
            </div>
            {filter && <FilterForm/>
            } 
        </div>
    )
}
export default Order