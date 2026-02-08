import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {

    try {
        mongoose.connection.on(
        'connected',
        ()=>{
            console.log("Mongo DB Connected");
        }
    )

   await mongoose.connect(
        process.env.MONGODB_URI
    )
    } catch (error) {
        console.log('Something went wrong' , error)
    }
}


export default connectDB;