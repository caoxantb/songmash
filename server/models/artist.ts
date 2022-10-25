import mongoose from "mongoose";

export interface IArtist extends Document {
  name: string,
  nameRef: string,
  playlistURL: string,
  bannerImg: string,
  avatarImg: string,
  activeYears: string,
  description: string,
  members: [string]
}

const artistSchema = new mongoose.Schema<IArtist>({
  name: String,
  nameRef: String,
  playlistURL: String,
  bannerImg: String,
  avatarImg: String,
  activeYears: String,
  description: String,
  members: [String]
});

const Artist = mongoose.model<IArtist>('Artist', artistSchema);

export default Artist;
