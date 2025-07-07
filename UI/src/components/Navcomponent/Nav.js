import './Nav.css';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
function Nav(){
    const [NavContent,setNavContent]=useState();

    useEffect(()=>{
        setInterval(()=>{
            if(localStorage.getItem("role")=="admin"){//regarding admin
                setNavContent(
<>
{/* Navbar Start */}
<div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
            {/* <a  className="navbar-brand">
                <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2"></i>LuxeLodge</h1>
            </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a  className="nav-item nav-link active"><Link to="/Admin">AdminHome</Link></a>
                     <a  className="nav-item nav-link"><Link to="/ManageUser">ManageUser</Link></a>
                    <div className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle text-primary" data-bs-toggle="dropdown">ProfileTeseting</a>
                        <div className="dropdown-menu m-0">
                            <a  className="dropdown-item"><Link to="/EPAdmin">Edit profile</Link></a>
                            <a  className="dropdown-item"><Link to="/EditPassword">Change password</Link></a>
                        </div>
                    </div>
                    <a  className="nav-item nav-link"><Link to="/addcity"> Add City</Link></a>
                    <a  className="nav-item nav-link"><Link to="/addhotel"> Add Hotel</Link></a>
                    
                   <a  className="nav-item nav-link"><Link to="/addroomcategory">Add Room Category</Link></a>
                    <a  className="nav-item nav-link"><Link to="/Logout">Logout</Link></a>
                    {/* <a  className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Get A Quote <i className="bi bi-arrow-right"></i></a> */}
                </div>
            </div>
        </nav>
    </div>
    {/* Navbar End */}
</>
                )
            }
            else if(localStorage.getItem("role")=="user"){//regarding user
                setNavContent(
                    <>
                    {/* Navbar Start */}
                    <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
                            <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
                                {/* <a  className="navbar-brand">
                                    <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2"></i>LuxeLodge</h1>
                                </a> */}
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="navbar-nav ms-auto py-0">
                                        <a  className="nav-item nav-link active"><Link to="/User">UserHome</Link></a>
                                        <div className="nav-item dropdown">
                                            <a  className="nav-link dropdown-toggle text-primary" data-bs-toggle="dropdown">Pages</a>
                                            <div className="dropdown-menu m-0">
                                                <a  className="dropdown-item "><Link to="/EPrUser">Edit user profile</Link></a>
                                                <a  className="dropdown-item "><Link to="/EditPassUser">Change password</Link> </a>
                                            </div>
                                        </div>
                                        <a  className="nav-item nav-link"><Link to="/viewhotel">View Hotel category</Link></a>
                                         {/* <a  className="nav-item nav-link"><Link to="/viewroomcategory">View room category</Link></a> */}
                                        {/*<a  className="nav-item nav-link"><Link to="/Contact">Contact</Link></a>
                                        <a  className="nav-item nav-link"><Link to="/Register">Register</Link></a> */}
                                        <a  className="nav-item nav-link"><Link to="/Logout">Logout</Link></a>
                                        {/* <a  className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Get A Quote <i className="bi bi-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </nav>
                        </div>
                        {/* Navbar End */}
                    </>
                )
            }
            else
            {
setNavContent(//normall nav bar show normly as a ui like home about register all pajes
    <>
    {/* Navbar Start */}
    <div className="container-fluid sticky-top bg-dark bg-light-radial shadow-sm px-5 pe-lg-0">
        <nav className="navbar navbar-expand-lg bg-dark bg-light-radial navbar-dark py-3 py-lg-0">
            <a  className="navbar-brand">
                <h1 className="m-0 display-4 text-uppercase text-white"><i className="bi bi-building text-primary me-2"></i>MokshaStays</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a  className="nav-item nav-link active"><Link to="/">Home</Link></a>
                    {/* <a  className="nav-item nav-link"><Link to="/About">About</Link></a>
                    <a  className="nav-item nav-link"><Link to="/Service">Service</Link></a>
                    <a  className="nav-item nav-link"><Link to="/Contact">Contact</Link></a> */}
                      <div className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle " data-bs-toggle="dropdown">More info</a>
                        <div className="dropdown-menu m-0">
                            <a  className="dropdown-item"><Link to="/About">About</Link></a>
                            <a  className="dropdown-item"><Link to="/Service">Service</Link></a>
                            <a  className="dropdown-item"><Link to="/Contact">Contact</Link></a>
                        </div> 
                    </div> 
                    <a  className="nav-item nav-link"><Link to="/Register">Register</Link></a>
                    <a  className="nav-item nav-link"><Link to="/Login">Login</Link></a>
                    {/* <a  className="nav-item nav-link bg-primary text-white px-5 ms-3 d-none d-lg-block">Get A Quote <i className="bi bi-arrow-right"></i></a> */}
                </div>
            </div>
        </nav>
    </div>
    {/* Navbar End */}
    </>
)
            }
        },1)
    },[]);
  return(
    <>
     {
        NavContent
      }
     
    </>
  )
}
export default Nav;