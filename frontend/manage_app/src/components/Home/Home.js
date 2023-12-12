import React from 'react'
import { useState } from 'react'
// import styles from "../../css/Home.module.css"
import Aside from '../Aside'
import BookingLog from '../Function/BookingLog'
import styles from "../../css/Part.module.css";

const Home = () => {
    const [showAside, setShowAside] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
  
    const showStaffAside = () => {
      setShowAside(true);
      setShowBooking(false);
    };

    const showCustomerBooking = () => {
        setShowBooking(true);
        setShowAside(false);
    };
  
    return (
      <>
        {showAside ? (
          <Aside />
        ) : (
        <div className={styles.centerContainer}>
          <div className={styles.container}>
            <button onClick={showStaffAside} className={styles.button}>
              Staff
            </button>
            <button onClick={showCustomerBooking} className={styles.button}>
                Customer
            </button>
          </div>
        </div>
        )}
        {showBooking && <BookingLog />}
      </>
    );
  };


export default Home