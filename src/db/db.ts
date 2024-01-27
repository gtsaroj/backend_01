import mongoose from "mongoose"
import { DBName } from "../constants.js"



interface CustomMessage {
    message : string
}
const connectDB = async() => {
try {
     const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://sarojgt326:saroj123@cluster0.lasungg.mongodb.net`   
     await mongoose.connect(`${MONGODB_URI}/${DBName}`)
        .then((res) => {
        console.log(`Database connected! ${res.connection.host}`)
    })
} catch (error) {
    const customMessage = error as CustomMessage;
 console.log(`connection failed : ${customMessage.message}`)
}
}

export {connectDB};