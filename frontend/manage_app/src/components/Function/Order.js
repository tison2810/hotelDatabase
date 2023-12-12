import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import styles2 from "../../css/InsertForm.module.css"

const Order = () => {
    const [listOrder, SetListOrder] = useState([]);
    const [sumOrder, SetSumOrder] = useState([0]);
    const [phoneNumber, setPhoneNumber] = useState('');

    const fetchOrderData = (phoneNumber) => {
        fetch(`http://localhost:8080/order/get?SoDienThoai=${phoneNumber}`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch order status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListOrder(resData);
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const largestSpent = (phoneNumber) => {
        fetch(`http://localhost:8080/order/sum?SoDienThoai=${phoneNumber}`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch order status.');
                }
                return res.json();
            })
            .then(resData => {
                SetSumOrder(resData);
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchOrderData(phoneNumber);
        largestSpent(phoneNumber);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const TotalExpenses = sumOrder;
    const ordersData = listOrder.filter(Array.isArray)[0];
    return (
       <div className={styles.container}>
            <h1>Order</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <form className={styles2.container} onSubmit={handleFormSubmit}>
                <div className={styles2.form_control}>
                    <label for="SoDienThoai">Phone:</label>
                    <input type="number" name="SoDienThoai" id="title" onChange={handlePhoneNumberChange} />
                </div>
                <button className={styles.button} type="submit" > Submit </button>
            </form>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>Room ID</td>
                        <td>Price</td>
                        <td>Quantity</td>
                    </tr>  
                </thead>
                {ordersData && ordersData.map((order, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{order.MaSo}</td>
                                <td>{order.MucGia}</td>
                                <td>{order.SoLuong}</td>
                            </tr>
                        </tbody>
                    )
                })}
                </table>
                <div className={styles.total}>
                    <p>Total Expenses: {TotalExpenses[0].TotalExpenses}</p>
                </div>
            </main>
            {/* <div className={styles.button_container}>
                <button onClick={FilterOrder} className={styles.button}>Search Order</button>
            </div>
            {filter && <FilterForm/>
            }  */}
        </div>
    )
}
export default Order