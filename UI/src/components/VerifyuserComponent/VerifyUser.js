import './VerifyUser.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapi } from '../../Apiurl';
import { Navigate, useParams } from "react-router-dom"
function VerifyUser(){

  const params=useParams();
  useEffect(()=>{
axios.get(__userapi+"fetch?email="+params.email).then((response)=>{
  if(response.data[0].__v==0){
var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}};
axios.patch(__userapi+"update",updateDetails).then((response)=>{
  console.log("User verified...");
});
}
});
  },[])
  return(
    <>
     {/* About Start */}
    <div className="container-fluid py-6 px-5">
        <div className="row g-5">
            <div className="col-lg-7">
                <h1>Welcome to userHome component</h1>
            </div>
            </div>
        </div>
Navigate("/login");
    {/* About End */} 
    </>
  )
}
export default VerifyUser;