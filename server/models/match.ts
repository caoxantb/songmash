import mongoose from "mongoose";

export interface IMatch extends Document {
  indexes: [Number];
  artistRef: String;
  leftWin: Number;
  rightWin: Number;
}

const matchSchema = new mongoose.Schema<IMatch>({
  indexes: [Number],
  artistRef: String,
  leftWin: Number,
  rightWin: Number,
});

const Match = mongoose.model<IMatch>("Artist", matchSchema);

export default Match;
