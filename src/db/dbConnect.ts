import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB successfully connected");
    });
    connection.on("error", () => {
      console.log("Something went wrong.Can't connect to MongoDB");
    });
  } catch (error) {
    console.log("Something went wrong");
  }
};

export default dbConnect;
