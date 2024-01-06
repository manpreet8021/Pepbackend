import mongoose from "mongoose";

 const connectDb = async ()=> {
  try {
    const URI = process.env.MONGO_URL
    const connection = await mongoose.connect(URI);
    console.log(connection.connection.host)
  } catch (error) {
    console.log(error)
  }
}

export default connectDb