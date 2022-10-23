import { component$, useWatch$, useStore, useMount$ } from "@builder.io/qwik";
import ArtistTrackCard from "./artist-track-card";
import trackService from "~/services/track";

const ArtistSongMash = component$(({ artist }) => {
  const store = useStore(
    {
      indexLeft: 0,
      indexRight: 0,
      trackLeft: {},
      trackRight: {},
      artistAllSongs: [],
    },
    { recursive: true }
  );

  useMount$(async () => {
    store.artistAllSongs = await trackService.getAllTracksByArtist(
      artist.nameRef
    );
    store.indexLeft = Math.floor(Math.random() * store.artistAllSongs.length);
    do {
      store.indexRight = Math.floor(
        Math.random() * store.artistAllSongs.length
      );
    } while (store.indexLeft === store.indexRight);
  });

  useWatch$(async ({ track }) => {
    const indexLeft = track(() => store.indexLeft);
    const indexRight = track(() => store.indexRight);
    store.trackLeft = store.artistAllSongs.find(
      (track) => track.index === indexLeft
    );
    store.trackRight = store.artistAllSongs.find(
      (track) => track.index === indexRight
    );
  });

  return (
    <div className="artist-songmash">
      <ArtistTrackCard />
      <div className="versus">vs.</div>
      <ArtistTrackCard />
    </div>
  );
});

export default ArtistSongMash;
