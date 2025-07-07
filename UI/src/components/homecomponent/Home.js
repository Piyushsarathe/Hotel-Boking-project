import React from 'react';
import { useState, useEffect } from 'react';
import './home.css'; // Import the styles
import axios from 'axios';
import { __cityapi } from '../../Apiurl';
import { Link, useParams } from 'react-router-dom';
import bgimage from "../../assets/image/hero2.jpg";


function Home() {
  const params = useParams();
  const [cDetail, setCDetail] = useState([]);


  useEffect(() => {
    axios.get(__cityapi + "fetch").then((response) => {
      setCDetail(response.data);
    }).catch((error) => {
        console.log(error);
    })
},[]);


  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center justify-content-center text-center"  >
        <div className='bimg' style={{ backgroundImage: `url(${bgimage})` }}>
          <div className="hero-overlay">
            <h1 className="display-4 fw-bold">Explore World-Class Destinations</h1>
            <p className="lead">Hand-picked stays and luxury hotels just for you</p>
          </div>
        </div>
      </section>

      {/* City Cards */}
      <section className="py-5 city-section">
        <div className="container" >
          <h2 className="text-center mb-5">Top Destinations</h2>
          
          {/* fetching city by api */}
          <div className='fetch'>
          <div className="row g-4">
            {
              cDetail.map((row, index) => (
                <div className="col-md-4" key={index}>
                  <div className="city-card card h-100 border-0 shadow-sm">
                    <div className="card-img-wrapper">
                      <Link to={`/viewhotel/${row.citynm}`}>
                        <img src={`./assets/uploads/cityicon/${row.cityiconnm}`} className="card-img-top"/>
                        {/* <p>{row.catnm}</p> */}
                      </Link>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title" style={{textTransform:"capitalize"}}>{row.citynm}</h5>
                      {/* <p className="card-text text-muted">{row.catnm}</p> */}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-5 text-white cta-section">
         <div className="container text-center">
           <h2 className="mb-3">Plan Your Dream Vacation</h2>
           <p className="mb-4">Start your journey with luxury, comfort, and style.</p>
           <a className="btn btn-light px-5 py-2">Book Now</a>
         </div>
       </section> */}
    </>
  );
}
export default Home;

