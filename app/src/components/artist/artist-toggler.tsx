import { component$ } from "@builder.io/qwik";

const ArtistToggler= component$(() => {
  return (
      <div className="artist-toggler">
        <div className="artist-toggle-section active">BIOGRAPHY</div>
        <div className="artist-toggle-section">SONG • MASH</div>
        <div className="artist-toggle-section">RANKINGS</div>
      </div>
  );
});

export default ArtistToggler;