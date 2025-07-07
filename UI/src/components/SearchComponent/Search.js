import './Search.css';
import { __cityapi } from '../../Apiurl';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Search() {
    const location = useLocation();
    const { citynm } = location.state || {};
    const [cDetails, setcDetails] = useState([]);

    useEffect(() => {
        axios.get(__cityapi + `fetch?citynm=${citynm}`).then((response) => {
            setcDetails(response.data);
            // console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    },[citynm]);

    return (
        <>
            <div className="container-xxl py-5" style={{ "padding": "100px" }} data-wow-delay="0.1s">
                {/* <div className="container"> */}
                {/* <div className="row g-5 align-items-center" style={{"marginLeft":"none"}}> */}
                {/* <div className="col-lg-12"> */}

                <h4 className='ht'>Popular Destinations</h4>
                <p className='ht'>We have selected some best locations around the india for you.</p>
                <div id="main1">
                    {
                        cDetails.map((row) => (
                            <div className="itemss wow fadeInUp" data-wow-delay="0.3s">
                                <Link to={`/viewhotel/${row.citynm}`}>
                                    <img src={`../assets/uploads/cityicon/${row.cityiconnm}`} height={340} width={340} />
                                    <p>{row.citynm}</p>
                                    <br />
                                    <p id="p1">{row.tag}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <br />
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )
}
export default Search;