import mongoose from "mongoose";

export interface ITrack extends Document {
  index: Number,
  title: string,
  artist: string,
  release: {
    discType: string,
    title: string,
  },
  year: number,
  duration: string,
  image: string,
  src: string,
  points: Number,
}

const trackSchema = new mongoose.Schema({
  index: Number,
  title: String,
  artist: String,
  release: {
    discType: String,
    title: String,
  },
  year: Number,
  duration: String,
  image: String,
  src: String,
  points: Number,
});

const Track = mongoose.model<ITrack>('Track', trackSchema);

export default Track;
