import { component$, useStore, useMount$, useOnWindow} from "@builder.io/qwik";
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
  });
  
  return (
    <div className="artist-rankings">
      <ArtistRankingHead innerWidth={window.innerWidth}/>
      {store.artistAllSongs.map((track, index) => {
        return <ArtistRankingRow track={track} index={index} innerWidth={window.innerWidth}/>
      })}
    </div>
  );
});

export default ArtistRankings;
