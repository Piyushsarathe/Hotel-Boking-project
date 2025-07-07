import './Contact.css';
// function Contact(){
//   return(
//     <>
//      {/* About Start */}
//     <div className="container-fluid py-6 px-5">
//         <div className="row g-5">
//             <div className="col-lg-7">
//                 <h1>Welcome to Contact</h1>
//             </div>
//             </div>
//         </div>

//     {/* About End */}
//     </>
//   )
// }
// export default Contact;
import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>📞 Contact Hotel Management System</h1>
      <p style={styles.paragraph}>
        Have a question, feedback, or need assistance? Our support team is here 24/7 to help you. Reach out using the form below or contact us directly!
      </p>

      <div style={styles.contactGrid}>
        <div style={styles.formContainer}>
          <h2 style={styles.subHeader}>Send Us a Message</h2>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} required />
            <input type="email" placeholder="Your Email" style={styles.input} required />
            <textarea placeholder="Your Message" rows="5" style={styles.textarea} required></textarea>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>

        <div style={styles.infoContainer}>
          <h2 style={styles.subHeader}>Contact Information</h2>
          <p style={styles.info}><strong>📍 Address:</strong> 123 Hotel Street, India, Country</p>
          <p style={styles.info}><strong>📞 Phone:</strong> +91 (123) 456-7890</p>
          <p style={styles.info}><strong>📧 Email:</strong> luxelodge@hotelmanagement.com</p>
          <p style={styles.info}><strong>🕒 Hours:</strong> Open 24/7</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f4f6f8',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  header: {
    fontSize: '2.5em',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.1em',
    lineHeight: '1.7',
    color: '#555',
    textAlign: 'center',
    marginBottom: '40px',
  },
  contactGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: '1 1 48%',
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  infoContainer: {
    flex: '1 1 48%',
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  subHeader: {
    fontSize: '1.5em',
    color: '#34495e',
    marginBottom: '15px',
    borderBottom: '2px solid #e67e22',
    paddingBottom: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1em',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1em',
    resize: 'vertical',
  },
  button: {
    padding: '12px',
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  info: {
    fontSize: '1.05em',
    color: '#555',
    marginBottom: '10px',
  },
};

export default ContactPage;
