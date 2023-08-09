import mongoose from "mongoose";

interface iAuth {
  task?: string;
}

interface iTaskData extends iAuth, mongoose.Document {}

export const taskModel = new mongoose.Schema(
  {
    task: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<iTaskData>("task", taskModel);
