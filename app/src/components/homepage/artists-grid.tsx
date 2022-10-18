import { component$ } from "@builder.io/qwik";
import ArtistsCard from "./artist-card";

const ArtistsGrid = component$(() => {
  return (
    <div className="artists-grid">
      <ArtistsCard />
      <ArtistsCard />
      <ArtistsCard />
      <ArtistsCard />
      <ArtistsCard />
      <ArtistsCard />
      <ArtistsCard />
    </div>
  );
});

export default ArtistsGrid;
