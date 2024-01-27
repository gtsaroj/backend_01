var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import { DBName } from "../constants.js";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://sarojgt326:saroj123@cluster0.lasungg.mongodb.net`;
        yield mongoose.connect(`${MONGODB_URI}/${DBName}`)
            .then((res) => {
            console.log(`Database connected! ${res.connection.host}`);
        });
    }
    catch (error) {
        const customMessage = error;
        console.log(`connection failed : ${customMessage.message}`);
    }
});
export { connectDB };
