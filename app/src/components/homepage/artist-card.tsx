import { component$ } from "@builder.io/qwik";

const ArtistsCard = component$(() => {
  return (
    <div className="artist-card">
      <img src="https://i.imgur.com/e6C8rtD.jpg" alt="" />
      <div className="artist-card-name">CÁ HỒI HOANG</div>
    </div>
  );
});

export default ArtistsCard;