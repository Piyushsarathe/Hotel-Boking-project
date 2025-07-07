import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
const app = express();
//to link route level middleware
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';
import HotelcategoryRouter from "./router/Hotelcategory.router.js";
import paymentRouter from './router/payment.router.js';
import AddcityRouter from './router/Addcity.Router.js';
import Razorpay from 'razorpay';
//to load cors configurations
app.use( cors());

//to read binary content
app.use(fileUpload());

//to load configuration body parser 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//Application level middleware
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/hotel",HotelcategoryRouter);
app.use("/payment",paymentRouter);
app.use("/city",AddcityRouter);
app.listen(3001);
console.log("server invoked at link :http://localhost:3001");  
