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

interface ArtistSongMashStore {
  indexLeft: number;
  indexRight: number;
  trackLeft: Track;
  trackRight: Track;
  artistAllSongs: Tracks | Track[];
}

const ArtistSongMash = component$(({ artist }: IArtist) => {
  const store: ArtistSongMashStore = useStore(
    {
      indexLeft: 0,
      indexRight: 0,
      trackLeft: { _id: "" },
      trackRight: { _id: "" },
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
    ) || { _id: "" };
    store.trackRight = store.artistAllSongs.find(
      (track) => track.index === indexRight
    ) || { _id: "" };
  });

  const clickHandler = $(async (winner: String) => {
    const [leftPoints, rightPoints] = calcEloRating(
      store.trackLeft.points || 0,
      store.trackRight.points || 0,
      winner
    );

    const trackLeft: Track = {
      ...(await trackService.updateTrackPoints(
        store.trackLeft._id,
        leftPoints
      )),
      points: leftPoints,
    };
    const trackRight: Track = {
      ...(await trackService.updateTrackPoints(
        store.trackRight._id,
        rightPoints
      )),
      points: rightPoints,
    };

    store.artistAllSongs = store.artistAllSongs.map((track) =>
      track.index === store.indexLeft ? trackLeft : track
    );
    store.artistAllSongs = store.artistAllSongs.map((track) =>
      track.index === store.indexRight ? trackRight : track
    );
    store.indexLeft =
      Math.floor(Math.random() * store.artistAllSongs.length) + 1;
    do {
      store.indexRight =
        Math.floor(Math.random() * store.artistAllSongs.length) + 1;
    } while (store.indexLeft === store.indexRight);
  });

  return (
    <div className="artist-songmash">
      <ArtistTrackCard
        track={store.trackLeft}
        clickHandler={$(() => clickHandler("left"))}
      />
      <div className="versus">vs.</div>
      <ArtistTrackCard
        track={store.trackRight}
        clickHandler={$(() => clickHandler("right"))}
      />
    </div>
  );
});

export default ArtistSongMash;
