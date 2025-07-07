import './AdminHome.css';
// function AdminHome(){
//   return(
//     <>
//      {/* About Start */}
//     <div className="container-fluid py-6 px-5">
//         <div className="row g-5">
//             <div className="col-lg-7">
//         <h1>Welcome to admin home component</h1>
//             </div>
//             </div>
//         </div>

//     {/* About End */} 
//     </>
//   )
// }
// export default AdminHome;
import React from 'react';

const AdminDashboard = () => {
  const handleClick = (section) => {
    alert(`You clicked: ${section}`);
  };

  return (
    <div className="admin-container">
      <aside className="sidebar">
        <div className="logo-section">HMS Admin</div>
        <ul className="sidebar-nav">
          <li className="sidebar-item" onClick={() => handleClick('Dashboard')}>Dashboard</li>
          <li className="sidebar-item" onClick={() => handleClick('Bookings')}>Bookings</li>
          <li className="sidebar-item" onClick={() => handleClick('Customers')}>Customers</li>
          <li className="sidebar-item" onClick={() => handleClick('Rooms')}>Rooms</li>
          <li className="sidebar-item" onClick={() => handleClick('Staff')}>Staff</li>
          <li className="sidebar-item" onClick={() => handleClick('Reports')}>Reports</li>
        </ul>
        <button className="logout-btn" onClick={() => handleClick('Logout')}>Logout</button>
      </aside>

      <main className="main-content">
        <section className="dashboard-section">
          <h2 className="section-title">Dashboard Overview</h2>
          <div className="dashboard-cards">
            <div className="card" style={{ backgroundColor: '#d0e6f7' }}>
              <div className="card-title highlight-text">Total Bookings</div>
              <div className="card-number highlight-text">1245</div>
              <p className="card-description highlight-text">Bookings this month</p>
              <button className="card-btn highlight-button">View</button>
            </div>
            <div className="card" style={{ backgroundColor: '#d7f2db' }}>
              <div className="card-title highlight-text">Available Rooms</div>
              <div className="card-number highlight-text">89</div>
              <p className="card-description highlight-text">Currently unoccupied</p>
              <button className="card-btn highlight-button">View</button>
            </div>
            <div className="card" style={{ backgroundColor: '#f3e8fd' }}>
              <div className="card-title highlight-text">Pending Check-ins</div>
              <div className="card-number highlight-text">34</div>
              <p className="card-description highlight-text">Expected arrivals today</p>
              <button className="card-btn highlight-button">View</button>
            </div>
            <div className="card" style={{ backgroundColor: '#ffe9cc' }}>
              <div className="card-title highlight-text">Monthly Revenue</div>
              <div className="card-number highlight-text">$45,320</div>
              <p className="card-description highlight-text">Revenue this month</p>
              <button className="card-btn highlight-button">View</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;