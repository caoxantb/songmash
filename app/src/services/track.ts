import axios from "axios";

const trackAPI = "http://localhost:3001/api/tracks";

const getAllTracksByArtist = async (artistRef: String) => {
  const res = await axios.get(`${trackAPI}/${artistRef}`);
  return res.data;
};

const getTrackById = async (id: String) => {
	const res = await axios.get(`${trackAPI}/${id}`)
	return res.data;
}

const updateTrackPoints = async (id: String) => {
  const res = await axios.put(`${trackAPI}/${id}`);
  return res.data;
};

export default {getAllTracksByArtist, getTrackById, updateTrackPoints}