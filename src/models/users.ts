import mongoose, { Schema } from "mongoose";


const Users = new Schema({
   name:String,
   email:String,
   password:String
})



export const users = mongoose.models.users || mongoose.model("users",Users)