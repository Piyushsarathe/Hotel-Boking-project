import Razorpay from "razorpay";
import crypto from 'crypto'

 
export const order =  async(req,res)=>{
//res.send("working")

const razorpay = new Razorpay({
    key_id:"rzp_test_xCe5SbIjxqqelP",
    key_secret: "bwoMI7pQD3tdAH9MGsmBpHnb"

})
const options = {
    amount:req.body.amount,
    currency:req.body.currency,
    receipt:"receipt#1",
    payment_capture:1
}
try{
    const response = await razorpay.orders.create(options)
    res.status(200).json(response);
}
catch(error){
    res.status(500).json({ error: "Order creation failed", details: error });
}
};


export const verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
    const hmac = crypto
      .createHmac("sha256","rzp_test_xCe5SbIjxqqelP")
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");
  
    if (hmac === razorpay_signature) {
      res.status(200).json({ msg: "Payment verified successfully" });
    } else {
      res.status(400).json({ msg: "Payment verification failed" });
}
};