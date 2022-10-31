import axios from "axios";

const mashAPI = "/api/mashes";

const updateMash = async (
  artist: string,
  indexes: [number, number],
  winner: string
) => {
  const res = await axios.put(`${mashAPI}/${artist}`, {
    indexes: indexes,
    winner: winner
  });
  console.log(res.data);
  return res.data;
};

export default {updateMash};