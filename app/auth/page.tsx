"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const toggleAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fakeAuthAPI();
      if (response.success) {
        router.push("/home");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      // Utilize the caught error
      console.error("Error during authentication:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fakeAuthAPI = async () => {
    // Simulate API behavior
    return new Promise<{ success: boolean }>((resolve) =>
      setTimeout(() => resolve({ success: true }), 1000)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>{isSignUp ? "Create Account" : "Welcome Back"}</h1>
        <p>
          {isSignUp ? "Sign up to get started!" : "Sign in to continue."}
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          {isSignUp && (
            <div className={styles.inputGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>
          )}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          {isSignUp && (
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            className={styles.authButton}
            disabled={loading}
          >
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <button className={styles.toggleButton} onClick={toggleAuthMode}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
