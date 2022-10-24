import axios from "axios";

const trackAPI = "http://localhost:8500/api/tracks";

const getAllTracksByArtist = async (artistRef: String) => {
  const res = await axios.get(`${trackAPI}/${artistRef}`);
  return res.data;
};

const getTrackById = async (id: String) => {
  const res = await axios.get(`${trackAPI}/${id}`, {});
  return res.data;
};

const updateTrackPoints = async (id: String, newPoint: Number) => {
  const res = await axios.put(`${trackAPI}/${id}`, {points: newPoint});
  console.log(res.data)
  return res.data;
};

export default { getAllTracksByArtist, getTrackById, updateTrackPoints };
