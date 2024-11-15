
import { connectDB } from "@/config/connectDB";
import Hotel from "@/models/hotel.model";

export default async function handler(req , res) {
    await connectDB();
    if(req.method == "GET"){
        const key = req.query.val;
        const hotels = await (
            await Hotel.find({ "facilities.name": { $in: key } })
        )
        res.status(200).json({ msg: "All Good", hotels });
    }
}