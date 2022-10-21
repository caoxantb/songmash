import { component$ } from "@builder.io/qwik";
import ArtistRankingRow from "./artist-ranking-row";

const ArtistRankings = component$(() => {
  return (
      <div className="artist-rankings">
        <ArtistRankingRow />
        <ArtistRankingRow />
      </div>
  );
});

export default ArtistRankings;
