import {
  component$,
  useWatch$,
  useStore,
  useMount$,
  $,
} from "@builder.io/qwik";
import ArtistTrackCard from "./artist-track-card";
import trackService from "~/services/track";
import { calcEloRating } from "~/helpers/elo-agorithm";

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
    store.indexLeft =
      Math.floor(Math.random() * store.artistAllSongs.length) + 1;
    do {
      store.indexRight =
        Math.floor(Math.random() * store.artistAllSongs.length) + 1;
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

  const clickHandler = $(async (winner: String) => {
    // tinh
    const [leftPoints, rightPoints] = calcEloRating(store.trackLeft.points, store.trackRight.points, winner)
    console.log(leftPoints, rightPoints)
    // update 2 lan
    const trackLeft = {...await trackService.updateTrackPoints(store.trackLeft._id, leftPoints), points: leftPoints}
    const trackRight = {...await trackService.updateTrackPoints(store.trackRight._id, rightPoints), points: rightPoints}
    // update artistAllSongs
    store.artistAllSongs = store.artistAllSongs.map(track => track.index === store.indexLeft ? trackLeft : track)
    store.artistAllSongs = store.artistAllSongs.map(track => track.index === store.indexRight ? trackRight : track)
    store.indexLeft =
      Math.floor(Math.random() * store.artistAllSongs.length) + 1;
    do {
      store.indexRight =
        Math.floor(Math.random() * store.artistAllSongs.length) + 1;
    } while (store.indexLeft === store.indexRight);
  });

  return (
    <div className="artist-songmash">
      <ArtistTrackCard track={store.trackLeft} clickHandler={$(() => clickHandler("left"))} />
      <div className="versus">vs.</div>
      <ArtistTrackCard track={store.trackRight} clickHandler={$(() => clickHandler("right"))} />
    </div>
  );
});

export default ArtistSongMash;
