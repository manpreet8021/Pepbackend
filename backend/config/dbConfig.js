import mongoose from "mongoose";

 const connect= async ()=> {
  try {
    
 const connect=await   mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MONGO CONNECTED SUCCESSFULLY!!");
    });
  } catch (error) {
    console.log("MONGODB Something went wrong!");
    console.log(error);
  }
}

export default connect