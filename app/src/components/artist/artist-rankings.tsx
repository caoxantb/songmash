import { component$, useStore, useMount$} from "@builder.io/qwik";
import {ArtistRankingRow, ArtistRankingHead} from "./artist-ranking-row";
import trackService from "~/services/track" 

interface ArtistRankingsStore {
  artistAllSongs: Tracks
}

const ArtistRankings = component$(({ artist }: IArtist) => {
  const store: ArtistRankingsStore = useStore(
    {
      artistAllSongs: [],
    },
    { recursive: true }
  );

  useMount$(async () => {
    store.artistAllSongs = await trackService.getAllTracksByArtist(
      artist.nameRef
    );
    store.artistAllSongs = store.artistAllSongs.sort((track1, track2) => (track2.points || 0) - (track1.points || 0))
    console.log(store.artistAllSongs)
  });

  return (
    <div className="artist-rankings">
      <ArtistRankingHead/>
      {store.artistAllSongs.map((track, index) => {
        return <ArtistRankingRow track={track} index={index}/>
      })}
    </div>
  );
});

export default ArtistRankings;
