import './ViewRoomcategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __categoryapi } from '../../Apiurl';
import { Link, useParams} from 'react-router-dom';

function ViewRoomCategory() {
    const params = useParams();
    const [cDetail, setCDetail] = useState([]);

    // useEffect(() => {
    //     axios.get(__categoryapi + "fetch").then((response) => {
    //         setCDetail(response.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // },[]);
    useEffect(() => {
          axios.get(__categoryapi + "fetch?Hnm="+ params.Hnm).then((response) => {
            setCDetail(response.data);
          }).catch((error) => {
            console.log(error);
          })
        }, []);
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeInUp" style={{ marginBottom: "80px" }} data-wow-delay="0.3s">
                            <h1>View Room Category</h1>
                            <div id='main'>
                                {
                                    cDetail.map((row) => (
                                        <div className='items'>
                                            <Link to={`/booking`}>
                                            <img src={`../assets/uploads/caticons/${row.caticonnm}`} height={350} width={350} />
                                            <p>{row.Hnm}</p>
                                            {/* <p>{row.catnm}</p> */}
                                            </Link>
                                        </div>
                                     ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    )
}
export default ViewRoomCategory;