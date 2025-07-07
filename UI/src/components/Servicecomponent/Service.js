import './Service.css';
import React from 'react';
function Service(){
  return(

<div style={styles.container}>
  <h1 style={styles.header}>Welcome to Hotel Management System</h1>
  <p style={styles.paragraph}>
    At <strong>Hotel Management System</strong>, we simplify your journey to finding the ideal hotel. Whether you're on a business trip or a relaxing vacation, our platform ensures a smooth and personalized booking experience.
  </p>

  <h2 style={styles.subHeader}>✨ Why Choose Us?</h2>
  <ul style={styles.list}>
    <li>🏨 Extensive Range of Hotels</li>
    <li>🖱️ Easy-to-Use Booking Interface</li>
    <li>💰 Guaranteed Best Prices</li>
    <li>🔒 Safe & Secure Reservations</li>
    <li>📞 24/7 Friendly Support</li>
  </ul>

  <h2 style={styles.subHeader}>🧭 How It Works</h2>
  <ol style={styles.orderedList}>
    <li>🔍 Search for Hotels</li>
    <li>⚖️ Compare Your Options</li>
    <li>🛎️ Book Instantly</li>
    <li>✈️ Enjoy Your Stay</li>
  </ol>

  <h2 style={styles.subHeader}>🚀 Get Started Today!</h2>
  <p style={styles.paragraph}>
    Begin your adventure with <strong>Hotel Management System</strong>. Search now and discover just how easy hotel booking can be.
  </p>
</div>
  )
};
export default Service;

const styles = {
  container: {
    padding: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  header: {
    fontSize: '2.5em',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.75em',
    color: '#34495e',
    marginTop: '30px',
    borderBottom: '2px solid #e67e22',
    paddingBottom: '5px',
  },
  paragraph: {
    fontSize: '1.1em',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '20px',
  },
  list: {
    margin: '15px 0',
    paddingLeft: '25px',
    color: '#444',
    lineHeight: '1.6',
    fontSize: '1.05em',
  },
  orderedList: {
    margin: '15px 0',
    paddingLeft: '25px',
    color: '#444',
    lineHeight: '1.6',
    fontSize: '1.05em',
    listStyleType: 'decimal',
  },
};
