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
        <h1>Welcome to Byrsa</h1>
        <p>Your gateway to knowledge and skills. Start learning today!</p>
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>Explore Courses</button>
          <button className={styles.secondaryButton}>Sign Up for Free</button>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className={styles.courses}>
        <h2>Popular Courses</h2>
        <div className={styles.courseGrid}>
          <div className={styles.courseCard}>
            <div className={styles.courseIcon}>💻</div>
            <h3>Web Development</h3>
            <p>Learn to build modern websites and web applications.</p>
            <button className={styles.courseButton}>Enroll Now</button>
          </div>
          <div className={styles.courseCard}>
            <div className={styles.courseIcon}>📊</div>
            <h3>Data Science</h3>
            <p>Master data analysis and machine learning techniques.</p>
            <button className={styles.courseButton}>Enroll Now</button>
          </div>
          <div className={styles.courseCard}>
            <div className={styles.courseIcon}>🎨</div>
            <h3>Graphic Design</h3>
            <p>Create stunning visuals and designs.</p>
            <button className={styles.courseButton}>Enroll Now</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Students Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>"Byrsa helped me transition into a new career in web development. Highly recommended!"</p>
            <span>- John Doe</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>"The courses are well-structured and easy to follow. Great for beginners!"</p>
            <span>- Jane Smith</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>"I love the hands-on projects. They really helped me solidify my skills."</p>
            <span>- Alex Johnson</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of students who are advancing their careers with Byrsa.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>

      <Footer />
    </div>
  );
}