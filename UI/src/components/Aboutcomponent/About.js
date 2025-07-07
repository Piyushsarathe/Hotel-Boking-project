import './About.css';
// function About(){
 
//   return(
//     <>
//     {/* About Start */}
//     <div className="container-fluid py-6 px-5">
//         <div className="row g-5">
//             <div className="col-lg-7">
//                 <h1>Welcome to About</h1>
//             </div>
//             </div>
//         </div>

//     {/* About End */}
//     </>
//   )
// }
// export default About;
import React from 'react';

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Welcome to the Hotel Management System, your ultimate solution for managing hotel operations efficiently and effectively. Our platform is designed to streamline every aspect of hotel management, from booking and reservations to customer relationship management and reporting.
      </p>
      <p>
        With years of experience in the hospitality industry, we understand the unique challenges faced by hotel managers and staff. Our system is tailored to meet these needs, providing a user-friendly interface and powerful features that enhance operational efficiency and improve guest satisfaction.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to empower hotels of all sizes with the tools they need to succeed in a competitive market. We aim to simplify hotel management processes, allowing you to focus on what truly matters: providing exceptional service to your guests.
      </p>
      <h3>Our Vision</h3>
      <p>
        We envision a world where technology and hospitality go hand in hand, creating seamless experiences for both hotel operators and guests. Our commitment to innovation drives us to continuously improve our platform, ensuring that you have access to the latest features and functionalities.
      </p>
      <h3>Why Choose Us?</h3>
      <ul>
        <li>Comprehensive Features: From booking management to analytics, we cover all aspects of hotel management.</li>
        <li>User-Friendly Interface: Our intuitive design makes it easy for staff to navigate and use the system.</li>
        <li>24/7 Support: Our dedicated support team is always available to assist you with any questions or issues.</li>
        <li>Scalable Solutions: Whether you run a small boutique hotel or a large chain, our system can grow with your business.</li>
      </ul>
      <img src="path_to_your_image.jpg" alt="Hotel Management" className="about-image" />
    </section>
  );
};

export default About;