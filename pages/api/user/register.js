import { connectDB } from "@/config/connectDB";
import User from "@/models/user.model";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectDB()

export default async function handler(req , res) {

    const {name , email , password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({msg: "All Fields are Mandatory !"})
    }
    const user = await User.findOne({email});

    if(user){
        return res.status(400).json({ msg: "User already Registered !" });
    }

    const hashedPassword = await bcryptjs.hash(password , 10);
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    })

    const response = await newUser.save();
    const token = jwt.sign({ token: response._id} , process.env.JWT_SECRET , {expiresIn: '30d'})

    return res.status(201)
        .json({msg: "Registered Succesfully !", token})
}