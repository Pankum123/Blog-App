import express from "express" 
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config();

const port = process.env.PORT;
const MONGO_URL = process.env.MONG_URI;

// DB Code
try{
    mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
} catch(error){
    console.log(error);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})