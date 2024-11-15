import Hotel from "@/models/hotel.model";
import { connectDB } from "@/config/connectDB";
import Razorpay from "razorpay";
import shortid from "shortid";

export default async function handler(req , res) {
    await connectDB()
    if(req.method === 'POST'){
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET
        })
        const hotel = await Hotel.findById(req.body.id);

        // const amount = 10;
        
        if(hotel){
            const amount = hotel.price;
            const options = {
                amount: (amount * 100).toString(),
                currency: "INR",
                recepist: shortid.generate(),
                payment_capture: 1
            }
            
            try {
                const result = await razorpay.orders.create(options);
                return res.status(201).json({
                    id: result.id,
                    currency: result.currency,
                    amount: result.amount
                })
            } catch (error) {
                res.status(400).json(error)
            }
        }

    }

}