import './ViewHotel.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __hotelapi } from '../../Apiurl';
import { Link, useParams } from "react-router-dom"
function ViewHotel() {
  const params = useParams();
  const [hDeatil, setHDetails] = useState([]);
  

  //use for city wise fetching data
  useEffect(() => {
    axios.get(__hotelapi + "fetch?citynm=" + params.citynm).then((response) => {
      setHDetails(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);
  //   useEffect(() => {// use for only normal fetching data
  //     axios.get(__hotelapi + "fetch").then((response) => {
  //       setHDetails(response.data);
  //     }).catch((error) => {
  //         console.log(error);
  //     })
  // },[]);
  return (
    <>
      {/* About Start
      <div className="container-fluid py-6 px-5">
        <div className="row g-5">
          <div className="col-lg-12">
            <h1>Show Hotel Details Here!!!</h1>
            <br></br>
            {
              <div id='main'>
                {
                  hDeatil.map((row) => (
                    <div className='items'>
                      <Link to={`/viewroomcategory/${row.Hnm}`}>
                        <img src={`../assets/uploads/Hotelicons/${row.Hiconnm}`} height={350} width={350} />
                        <p>{row.Hnm}</p>
                      </Link>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </div> */}

      {/* About End */}
  {/* About Start */}
  <div className='fcon'>
  <div className='filters'>
    <h1>this is div</h1>
    <div class="sidebar">
    <h2>Facilities</h2>
    <div class="facility">Free Wi-Fi</div>
    <div class="facility">Swimming Pool</div>
    <div class="facility">Spa & Wellness</div>
    <div class="facility">Restaurant</div>
    <div class="facility">Gym</div>
    <div class="facility">Conference Room</div>
    <div class="facility">24/7 Room Service</div>
  </div>

  <div class="main-content">
    <h1>Welcome to Our Hotel</h1>
    <p>Please select a facility from the sidebar to explore more about what we offer to make your stay comfortable and memorable.</p>
  </div>
  </div>
  <div className="container-fluid py-6 px-5 hotel-section">
    <div className="row g-5">
      <div className="col-lg-12">
        <h1 className="section-title">Show Hotel Details Here!!!</h1>
        <br />
        <div className='Hotel'>
        <div id="main" className="hotel-list">
          {
            hDeatil.map((row) => (
              <div className="hotel-item" key={row.Hnm}>
                <Link to={`/viewroomcategory/${row.Hnm}`}>
                <div className='HotelID'>
                 <div className='Hotelimage'>
                  <img 
                    src={`../assets/uploads/Hotelicons/${row.Hiconnm}`} 
                    alt={row.Hnm}
                    className="hotel-image"
                  />
                  </div>
                  <div className='text'>
                  <p className="hotel-name" style={{textTransform:'capitalize'}}><h3>{row.Hnm}</h3></p>
                  <p className="city-name" style={{textTransform:'capitalize'}}><h6>{row.citynm}</h6></p>
<div className='cfb'>
                  <p className='CF' style={{textTransform:'capitalize'}}>{row.CF}</p>
                  </div>
                  <p className='FC1' style={{textTransform:'capitalize'}}>{row.FC1}</p>
                  <p className='FC2' style={{textTransform:'capitalize'}}>{row.fc2}</p>
                  <p className='MFC' style={{textTransform:'capitalize'}}>{row.MFC}</p>
                  {/* <p>{row}</p> */}
                  </div>
                  <div className='Facility'>
                    <div className='facilityf'>
                      
                 <div className='RT'> <p className='RT' >{row.Rating}</p></div>
                 <div> <p className='OP' >{row.OLDPRICE}</p></div>
                 <div> <p className='NP' ><h3>{row.NEWPRICE}</h3></p></div>
                <div>  <p className='fees' >{row.FEES}</p></div>
                  </div>
                  </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  {/* About End */}
    </>
  )
}
export default ViewHotel;
