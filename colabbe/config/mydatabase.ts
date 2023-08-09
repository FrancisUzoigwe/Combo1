import mongoose from "mongoose";

const MongoString : string = "mongodb://127.0.0.1:27017/mydatabase"
export const mydatabase = () => {
    mongoose.connect(MongoString).then(() => {
        console.log("DB connection established")
    })
}