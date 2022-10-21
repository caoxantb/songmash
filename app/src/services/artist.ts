import axios from "axios";

const artistAPI = "http://localhost:3001/api/artists";

const getAllArtists = async () => {
  const res = await axios.get(artistAPI);
  return res.data;
};

export default { getAllArtists };
