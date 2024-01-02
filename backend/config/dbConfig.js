import mongoose from "mongoose";

 const connectDb = async ()=> {
  try {
    const connection = await mongoose.connect('mongodb+srv://admin:Passw0rd@peprelier.7mpcnrw.mongodb.net/');
    console.log(connection.connection.host)
  } catch (error) {
    console.log(error)
  }
}

export default connectDb