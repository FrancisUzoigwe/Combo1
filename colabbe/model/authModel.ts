import mongoose from "mongoose";

interface iAuth {
    name?: string;
    email?: string;
}

interface iAuthData extends iAuth, mongoose.Document{}

export const authModel = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
},{
    timestamps: true
})

export default mongoose.model<iAuthData>("auth", authModel)