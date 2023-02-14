const mashAPI = `https://songmash.vercel.app/api/mashes`;

const updateMash = async (
  artist: string,
  indexes: [number, number],
  winner: string
) => {
  const res = await fetch(`${mashAPI}/${artist}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      indexes: indexes,
      winner: winner
    })
  });

  const data = await res.json()
  return data;
};

export default {updateMash};
