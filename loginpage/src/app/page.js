"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [signUpMessage, setSignUpMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setMessage(`🎉 Login Successful! Welcome, ${username}!`);
      setIsLoggedIn(true);
    } else {
      alert("Please fill in both fields.");
    }
  };

  const handleSignUp = () => {
    setSignUpMessage("Redirecting to Sign-Up page... 🚀");
    setTimeout(() => {
      window.location.href = "/signup"; // Replace with your actual Sign-Up route
    }, 1000);
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In feature coming soon!");
    // Add logic here for Google OAuth integration if needed
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Welcome Back 👋</h1>
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>
                Email*
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>
                Password*
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <button type="submit" style={styles.button}>
              🚀 Login
            </button>
            <button
              type="button"
              style={{ ...styles.button, backgroundColor: "#ff9800" }}
              onClick={handleSignUp}
            >
              ✨ Sign Up
            </button>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              style={styles.googleButton}
            >
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png" // Google icon placeholder
                alt="Google Logo"
                style={styles.googleIcon}
              />
              Sign in with Google
            </button>
            {signUpMessage && (
              <p style={{ color: "orange", textAlign: "center", marginTop: "10px" }}>
                {signUpMessage}
              </p>
            )}
          </form>
        ) : (
          <p style={styles.successMessage}>{message}</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6dd5ed, #2193b0, #c94b4b)",
    fontFamily: "'Poppins', sans-serif",
  },
  formContainer: {
    width: "350px",
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  formGroup: { marginBottom: "15px" },
  label: { display: "block", marginBottom: "8px", color: "#555" },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "1rem",
    transition: "0.3s",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s ease",
    marginTop: "10px",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    color: "#333",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "0.3s ease",
    marginTop: "10px",
  },
  googleIcon: {
    marginRight: "8px",
    height: "18px",
    width: "18px",
  },
  successMessage: {
    textAlign: "center",
    color: "#4caf50",
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
};
