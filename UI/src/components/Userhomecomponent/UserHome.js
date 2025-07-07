import './UserHome.css';
// function UserHome(){
//   return(
//     <>
//      {/* About Start */}
//     <div className="container-fluid py-6 px-5">
//         <div className="row g-5">
//             <div className="col-lg-7">
//                 <h1>Welcome to userHome component</h1>
//             </div>
//             </div>
//         </div>

//     {/* About End */} 
//     </>
//   )
// }
// export default UserHome;
import React from 'react';
import './UserHome.css'; // Import the custom CSS file

const UserHome = () => {
  return (
    <div className="user-home-container">
      {/* Hero Section */}
      <div className="h-section">
        <div className="h-content">
          <h1 className="h-title">Welcome to Your Hotel Dashboard</h1>
          <p className="h-description">Explore, book, and manage your stays with ease.</p>
          <button className="cta-button">🚀 Get Started</button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="car-container">
        {/* Card 1 */}
        <div className="car card-1">
          <div className="car-icon">🏨</div>
          <h2 className="car-title">Browse Hotels</h2>
          <p className="car-description">Find luxurious hotels with exclusive deals and offers.</p>
          <button className="car-button">Explore</button>
        </div>

        {/* Card 2 */}
        <div className="car card-2">
          <div className="car-icon">📅</div>
          <h2 className="car-title">My Bookings</h2>
          <p className="car-description">View and manage your current and upcoming bookings.</p>
          <button className="car-button">View Bookings</button>
        </div>

        {/* Card 3 */}
        <div className="car card-3">
          <div className="car-icon">🛏️</div>
          <h2 className="car-title">Room Services</h2>
          <p className="car-description">Request food, housekeeping, and services directly to your room.</p>
          <button className="car-button">Request Now</button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
