import React, { useState } from "react";
import { motion } from "framer-motion";

const API_URL = "https://your-render-backend-url.onrender.com";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        window.location.href = "/dashboard";
      } else {
        alert("Login failed");
      }
    } catch {
      alert("Server error");
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.card}
      >
        <h1 style={styles.title}>CoinVault NG</h1>
        <p style={styles.subtitle}>Premium Admin Portal</p>

        <input
          style={styles.input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
          onClick={handleLogin}
        >
          Secure Login
        </motion.button>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1f1c2c, #0f0c29)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    overflow: "hidden"
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(20px)",
    padding: "50px",
    borderRadius: "25px",
    width: "380px",
    textAlign: "center",
    boxShadow: "0 0 60px rgba(255,215,0,0.3)"
  },
  title: {
    color: "#FFD700",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#aaa",
    marginBottom: "30px"
  },
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "12px",
    border: "none",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(45deg, #FFD700, #ffcc00)",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255,215,0,0.6)"
  }
};

export default Login;
