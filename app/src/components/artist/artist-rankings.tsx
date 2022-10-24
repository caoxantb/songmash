import { component$, useStore, useMount$} from "@builder.io/qwik";
import ArtistRankingRow from "./artist-ranking-row";
import trackService from "~/services/track"

const ArtistRankings = component$(({ artist, toggle }) => {
  const store = useStore(
    {
      artistAllSongs: [],
      toggle: toggle
    },
    { recursive: true }
  );

  useMount$(async () => {
    store.artistAllSongs = await trackService.getAllTracksByArtist(
      artist.nameRef
    );
    store.artistAllSongs = store.artistAllSongs.sort((track1, track2) => track2.points - track1.points)
    console.log(store.artistAllSongs)
  });

  return (
    <div className="artist-rankings">
      <ArtistRankingRow head={true}/>
      {store.artistAllSongs.map((track, index) => {
        return <ArtistRankingRow track={track} index={index}/>
      })}
    </div>
  );
});

export default ArtistRankings;
