import express from "express"
import * as paymentcontroller from '../controller/payment.controller.js'
const router=express.Router()

router.post("/order", paymentcontroller.order);
router.post("/verify", paymentcontroller.verifyPayment);
export default router ;