import dotenv from "dotenv";
dotenv.config(); // load env first

import Razorpay from 'razorpay'

const razorpay= new Razorpay({
    key_id:"rzp_test_123456789",
    key_secret:"your_real_secret"
})

export default razorpay;