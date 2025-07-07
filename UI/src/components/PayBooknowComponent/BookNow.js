// import "/BookNow.css";
// import React from "react";
// import axios from "axios";
// function App(){
//     const [responseID, setResponseID] = React.useState();
//     const [response, setResponse] = React.useState();

//     const LoadScript= (src) => {
//         return new Promise((resolve) => {
//             const script = document.createElement("script");
//             script.src = src;
//             script.onload = () => {
//                 resolve(true);
//             };
//             script.onerror = () => {
//                 resolve(false);
//             };
//             document.body.appendChild(script);
//         });
//     };

//     const creatRazorpayOrder = async (amount) => {
//         const res = await axios.post("http://localhost:3001/payment/order", {
//             amount: 50000,
//             currency: "INR",
//         });
//         return res.data;
//     };
//     return(
//         <div className="booknow">

//         </div>
//     );
// }