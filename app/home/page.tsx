"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './styles/globals.css';
import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Ramy-Learn</h1>
        <p>Your gateway to knowledge and skills. Start learning today!</p>
        <button className={styles.ctaButton}>Explore Courses</button>
      </section>

      {/* Course Section */}
      <section className={styles.courses}>
        <h2>Popular Courses</h2>
        <div className={styles.courseGrid}>
          <div className={styles.courseCard}>
            <h3>Web Development</h3>
            <p>Learn to build modern websites and web applications.</p>
          </div>
          <div className={styles.courseCard}>
            <h3>Data Science</h3>
            <p>Master data analysis and machine learning techniques.</p>
          </div>
          <div className={styles.courseCard}>
            <h3>Graphic Design</h3>
            <p>Create stunning visuals and designs.</p>
          </div>
        </div>
      </section>

     <Footer />
    </div>
  );
}