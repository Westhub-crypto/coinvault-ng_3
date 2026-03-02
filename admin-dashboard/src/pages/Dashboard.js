import React from "react";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Admin Dashboard</h1>

      <div style={styles.cards}>
        <motion.div whileHover={{ scale: 1.05 }} style={styles.card}>
          <h3>Total Users</h3>
          <p>1,240</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} style={styles.card}>
          <h3>Pending Withdrawals</h3>
          <p>18</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} style={styles.card}>
          <h3>Total Revenue</h3>
          <p>$12,450</p>
        </motion.div>
      </div>

      <button style={styles.logout}>Logout</button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1f1c2c, #0f0c29)",
    color: "white",
    padding: "60px",
    fontFamily: "Arial",
    textAlign: "center"
  },
  title: {
    color: "#FFD700",
    marginBottom: "50px"
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(15px)",
    padding: "30px",
    borderRadius: "20px",
    width: "250px",
    boxShadow: "0 0 40px rgba(255,215,0,0.3)"
  },
  logout: {
    marginTop: "40px",
    padding: "12px 30px",
    background: "linear-gradient(45deg, #FFD700, #ffcc00)",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255,215,0,0.6)"
  }
};

export default Dashboard;
