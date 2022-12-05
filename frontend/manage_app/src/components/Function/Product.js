import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"



const Product = () => {
    const [listProduct, SetListProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/product/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                SetListProduct(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listProduct])

    return (
        <div className={styles.container}>
            <h1>Product</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Weight</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Type</td>
                        <td>Cost</td>
                        <td>Code of From Form</td>
                    </tr>  
                </thead>
                {listProduct.map(product => {
                    return (
                        <tbody>
                            <tr>
                                <td>{product.ID}</td>
                                <td>{product.Khoi_luong}</td>
                                <td>{product.Noi_den}</td>
                                <td>{product.Noi_di}</td>
                                <td>{product.Loai}</td>
                                <td>{product.Phi_lien_tinh}</td>
                                <td>{product.ma_bien_ban_gui}</td>
                            </tr>
                        </tbody>
                    )
                })}

                </table>
            </main>
        </div>
    )
}
export default Product