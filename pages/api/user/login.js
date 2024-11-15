import { connectDB } from "@/config/connectDB";
import User from "@/models/user.model";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connectDB();

  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    console.log(user);
    
    const passwordMatched = await bcryptjs.compare(
      password,
      user.password
    )

    if (!passwordMatched) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    
    res.status(200).json({ success: true , message:"Logged In Successfully ", token});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }

}
