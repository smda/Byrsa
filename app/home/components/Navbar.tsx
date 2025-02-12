"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import styles from "../styles/home.module.css";

export default function Navbar() {
  const router = useRouter(); // Initialize the router
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Clear user session or authentication tokens (if any)
    localStorage.removeItem("authToken"); // Example: Remove a token from localStorage
    sessionStorage.removeItem("userData"); // Example: Remove user data from sessionStorage

    // Redirect to the /auth route
    router.push("/auth");
  };

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/home">
            <img src="/dolearn.png" alt="DoLearn Logo" className={styles.logoImage} />
          </Link>
        </div>
      <div className={styles.navLinks}>
        <Link href="/home" className={styles.navLink}>Home</Link>
        <Link href="/home" className={styles.navLink}>Courses</Link>
        <Link href="/home" className={styles.navLink}>About</Link>
        <Link href="/home" className={styles.navLink}>Contact</Link>
      </div>
      <div className={styles.profileIconContainer}>
        <FaUserCircle className={styles.profileIcon} onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className={styles.dropdownMenu}>
            <Link href="/profile" className={styles.dropdownItem}>Profile</Link>
            <Link href="/my-courses" className={styles.dropdownItem}>My Courses</Link>
            <button onClick={handleLogout} className={styles.dropdownItem}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}