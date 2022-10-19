import { component$ } from "@builder.io/qwik";
import ArtistTrackCard from "./artist-track-card";

const ArtistSongMash = component$(() => {
  return (
    <div className="artist-songmash">
      <ArtistTrackCard />
      <div className="versus">vs.</div>
      <ArtistTrackCard />
    </div>
  );
});

export default ArtistSongMash;
