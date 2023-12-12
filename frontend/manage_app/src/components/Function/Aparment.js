import React from "react";
import { useEffect, useState } from "react";
import styles from "../../css/Part.module.css"
import styles2 from "../../css/InsertForm.module.css"


const Apartment = () => {
    const [listApartment, SetApartment] = useState([])
    const [sumIncome, SetSumIncome] = useState([0]);
    const [ApartmentID, setApartmentID] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        fetch("http://localhost:8080/apartment/get")
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch user status.');
                }
                return res.json();
            })
            .then(resData => {
                SetApartment(resData);
            })
            .catch(err => {
                console.log(err);
            })

    }, [listApartment])
    
    const inCome = (ApartmentID, month, year) => {
        fetch(`http://localhost:8080/apartment/sum?MasoCN=${ApartmentID}&month=${month}&year=${year}`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch order status.');
                }
                return res.json();
            })
            .then(resData => {
                SetSumIncome(resData);
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            });
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        inCome(ApartmentID, month, year);
    };

    const handleApartID = (event) => {
        setApartmentID(event.target.value);
    };
    const handleMonth = (event) => {
        setMonth(event.target.value);
    };
    const handleYear = (event) => {
        setYear(event.target.value);
    };

    const TotalIncome = sumIncome;
    return (
        <div className={styles.container}>
            <h1>Apartment</h1>
            <div className={styles.note}>
                <p><i>Last updated 24h ago</i></p>
            </div>
            <form className={styles2.container} onSubmit={handleFormSubmit}>
                <div className={styles2.form_control}>
                    <label for="MasoCN">Apartment ID:</label>
                    <input type="text" name="MasoCN" id="title" onChange={handleApartID} />
                </div>
                <div className={styles2.form_control}>
                    <label for="month">Month:</label>
                    <input type="number" name="month" id="title" onChange={handleMonth} />
                </div>
                <div className={styles2.form_control}>
                    <label for="year">Year:</label>
                    <input type="number" name="year" id="title" onChange={handleYear} />
                </div>
                <button className={styles.button} type="submit" > Submit </button>
            </form>
            <main>
            <table>
                <thead>
                    <tr>
                        <td>Aparment ID</td>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Employees</td>
                        
                    </tr>  
                </thead>
                {listApartment.map(apartment => {
                    return (
                        <tbody>
                            <tr>
                                <td>{apartment.MasoCN}</td>
                                <td>{apartment.Ten}</td>
                                <td>{apartment.DiaChi}</td>
                                <td>{apartment.SoLuongNhanVien}</td>
                            </tr>
                        </tbody>
                    )
                })}

                </table>
                <div className={styles.total}>
                    <p>Total Income: {TotalIncome[0].TotalIncome}</p>
                </div>
            </main>
        </div>
    )
}
export default Apartment;