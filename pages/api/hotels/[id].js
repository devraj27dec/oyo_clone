import { connectDB } from "@/config/connectDB";
import Hotel from "@/models/hotel.model";

export default async function handler(req,res){
    await connectDB();
    if(req.method==="GET"){
        if(req.query.id){
            const hotel = await Hotel.findById(req.query.id);
            res.status(200).json({msg:"Good" , hotel});
        }
    }
}