import mongoose from "mongoose";

export interface IMash extends Document {
  indexes: [Number];
  artistRef: String;
  leftWin: number;
  rightWin: number;
}

const matchSchema = new mongoose.Schema<IMash>({
  indexes: [Number],
  artistRef: String,
  leftWin: Number,
  rightWin: Number,
});

const Mash = mongoose.model<IMash>("Mash", matchSchema);

export default Mash;
