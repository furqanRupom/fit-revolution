import mongoose, { Schema } from "mongoose";


const challengesDoc = new Schema({
    creatorName:String,
    creatorEmail:String,
    challengeName:String,
    goals:String,
    description:String,
    progressTracking:String,
    duration:String,
    rewards:String
})


export const Challenges = mongoose.models.challenges || mongoose.model("challenges",challengesDoc);