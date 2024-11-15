import { connectDB } from "@/config/connectDB";
import Hotel from '@/models/hotel.model'


export default async function handler(req, res) {
    await connectDB();
    if(req.method === "GET") {
        const hotels = await Hotel.find({ price: { $lte: req.query.price } });
    res.status(200).json({ msg: "Range Filter.", hotels });
  }
}