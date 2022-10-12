import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  title: String,
  artist: String,
  release: [{
    discType: String,
    title: String,
  }],
  year: Number,
  duration: String,
  image: String,
  src: String,
  points: Number,
});

const Track = mongoose.model('Track', trackSchema);

export default Track;
