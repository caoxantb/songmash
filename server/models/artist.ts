import mongoose from "mongoose";

export interface IArtist extends Document {
  name: String,
  nameRef: String,
  playlistURL: String,
  bannerImg: String,
  avatarImg: String,
  activeYears: String,
  description: String,
}

const artistSchema = new mongoose.Schema<IArtist>({
  name: String,
  nameRef: String,
  playlistURL: String,
  bannerImg: String,
  avatarImg: String,
  activeYears: String,
  description: String,
});

const Artist = mongoose.model<IArtist>('Artist', artistSchema);

export default Artist;
