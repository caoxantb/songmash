import {
  component$,
  useStore,
  useMount$,
  useOnWindow,
  useWatch$,
  $,
} from "@builder.io/qwik";
import { ArtistRankingRow, ArtistRankingHead } from "./artist-ranking-row";
import trackService from "~/services/track";

interface ArtistRankingsStore {
  artistAllSongs: Tracks;
  sortBy: "score" | "track" | "release" | "duration";
}

const ArtistRankings = component$(({ artist }: IArtist) => {
  const store: ArtistRankingsStore = useStore(
    {
      artistAllSongs: [],
      sortBy: "score",
    },
    { recursive: true }
  );

  useMount$(async () => {
    store.artistAllSongs = await trackService.getAllTracksByArtist(
      artist.nameRef
    );
    store.artistAllSongs = store.artistAllSongs.sort(
      (track1, track2) => (track2.points || 0) - (track1.points || 0)
    );
  });

  useWatch$(({ track }) => {
    const sortMethod = track(() => store.sortBy);
    if (sortMethod === "score") {
      store.artistAllSongs = store.artistAllSongs.sort(
        (track1, track2) =>
          (track2.points || 0) - (track1.points || 0) ||
          (track1.index || 0) - (track2.index || 0)
      );
    } else if (sortMethod === "track") {
      store.artistAllSongs = store.artistAllSongs.sort((track1, track2) => {
        return track1.title && track2.title
          ? track1.title.localeCompare(track2.title)
          : 0;
      });
    } else if (sortMethod === "release") {
      store.artistAllSongs = store.artistAllSongs.sort(
        (track1, track2) => (track2.index || 0) - (track1.index || 0)
      );
    } else {
      store.artistAllSongs = store.artistAllSongs.sort(
        (track1, track2) =>
          parseFloat(track2.duration?.replace(":", ".") || "0") -
          parseFloat(track1.duration?.replace(":", ".") || "0")
      );
    }
  });

  const sortHandler = $(
    (sortMethod: "score" | "track" | "release" | "duration") => {
      store.sortBy = store.sortBy === sortMethod ? "score" : sortMethod;
      console.log(store.sortBy);
    }
  );

  return (
    <div className="artist-rankings">
      <ArtistRankingHead
        innerWidth={window.innerWidth}
        sortHandler={sortHandler}
      />
      {store.artistAllSongs.map((track, index) => {
        return (
          <ArtistRankingRow
            track={track}
            index={index}
            innerWidth={window.innerWidth}
          />
        );
      })}
    </div>
  );
});

export default ArtistRankings;
