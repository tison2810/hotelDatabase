import React from "react";
import { useEffect, useState } from "react";


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
        <div>
            <h1>Product</h1>
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
        </div>
    )
}
export default Product