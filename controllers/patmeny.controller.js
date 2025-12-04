import razorpay from "../config/razorpay.js";

export const createOrder = async (req, res) => {
  const { amount } = req.body;
  try {
    const option = {
      amount: amount * 100,
      currency: "inr",
      receipt: "receipt",
    };
    const order = await razorpay.orders.create(option);
    return res.status(200).json({ message: "Order created", order });
  } catch (err) {
    console.log("err",err);
  }
};
