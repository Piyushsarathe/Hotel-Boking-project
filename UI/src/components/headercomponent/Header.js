import './Header.css';
import { useState,useEffect } from  'react';
function Header(){
    const[headerContent,setHeaderContent]=useState();

    useEffect(()=>{
        setInterval(()=>{
        if(localStorage.getItem("role")==="admin")
            {
setHeaderContent(<>
{/* Topbar Start */}
<div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5">
            <div class="col-lg-4 text-center py-3">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Welcome to admin pannel</h6>
                        <span>Welcome {localStorage.getItem("name")}</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center border-start border-end py-3">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Email Us</h6>
                        <span>{localStorage.getItem("email")}</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center py-3">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Call Us</h6>
                        <span>+012 345 6789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}
</>)
        }
        else if(localStorage.getItem("role")==="user")
        {
            setHeaderContent(
                <>
                {/* Topbar Start */}
                <div className="container-fluid px-5 d-none d-lg-block">
                    <div className="row gx-5">
                        <div class="col-lg-4 text-center py-3">
                            <div className="d-inline-flex align-items-center">
                                <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                                <div className="text-start">
                                    <h6 className="text-uppercase fw-bold">Welcome to user pannel</h6>
                                    <span>Welcome {localStorage.getItem("name")}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center border-start border-end py-3">
                            <div className="d-inline-flex align-items-center">
                                <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                                <div className="text-start">
                                    <h6 className="text-uppercase fw-bold">Email Us</h6>
                                    <span>{localStorage.getItem("email")}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center py-3">
                            <div className="d-inline-flex align-items-center">
                                <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                                <div className="text-start">
                                    <h6 className="text-uppercase fw-bold">Call Us</h6>
                                    <span>+012 345 6789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                </>
            )
        }
        else
        {
setHeaderContent(
    <>
    {/* Topbar Start */}
    <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5">
            <div class="col-lg-4 text-center py-3">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Our Office</h6>
                        <span>123 Street, Indore, India</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center border-start border-end py-3">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Email Us</h6>
                        <span>LuxeLodge.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-center py-3">
                <div className="d-inline-flex align-items-center">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                    <div className="text-start">
                        <h6 className="text-uppercase fw-bold">Call Us</h6>
                        <span>+012 345 6789</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}
    </>
)
        }
    },1);
    },[]);
  return(
    <>
    {
        headerContent
    }
       
    </>
  )
}
export default Header;