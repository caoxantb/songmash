import axios from "axios";

const artistAPI = "http://localhost:8500/api/artists";

const getAllArtists = async (): Promise<[Artist]> => {
  const res = await axios.get(artistAPI);
  return res.data;
};

const getArtistByNameRef = async (nameRef: string) => {
  const res = await axios.get(`${artistAPI}/${nameRef}`);
  return res.data;
};

export default { getAllArtists, getArtistByNameRef };
