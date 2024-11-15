import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

},{timestamps: true})


userSchema.pre('save' , async function (next) {
  if(!this.isModified('password')){
    return next()
  }
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password , salt)
  next()
})


const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;