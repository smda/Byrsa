import React from "react";
import styles from "./page.module.css";

const PaymentPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Secure Payment</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.formSection}>
          <h2>Payment Details</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name on Card</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className={styles.inlineInputs}>
              <div className={styles.inputGroup}>
                <label htmlFor="expiry">Expiry Date</label>
                <input type="text" id="expiry" placeholder="MM/YY" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" required />
              </div>
            </div>
            <button type="submit" className={styles.payButton}>
              Pay Now
            </button>
          </form>
        </section>
        <section className={styles.summarySection}>
          <h2>Order Summary</h2>
          <div className={styles.summary}>
            <p>Item Total: <span>$100.00</span></p>
            <p>Tax: <span>$5.00</span></p>
            <p><strong>Total: <span>$105.00</span></strong></p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PaymentPage;
