import axios from "axios";

const trackAPI = "http://localhost:8500/api/tracks";

const getAllTracksByArtist = async (artistRef: string) => {
  const res = await axios.get(`${trackAPI}/${artistRef}`);
  return res.data;
};

const getTrackById = async (id: string) => {
  const res = await axios.get(`${trackAPI}/${id}`, {});
  return res.data;
};

const updateTrackPoints = async (id: string, newPoint: number) => {
  const res = await axios.put(`${trackAPI}/${id}`, {points: newPoint});
  console.log(res.data)
  return res.data;
};

export default { getAllTracksByArtist, getTrackById, updateTrackPoints };
