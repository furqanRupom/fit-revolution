import mongoose, { Schema } from "mongoose";

const articlesDoc = new Schema({
    date:String,
    author:String,
    title:String,
    description:String
})


export const articles = mongoose.models.articles || mongoose.model("articles",articlesDoc);
