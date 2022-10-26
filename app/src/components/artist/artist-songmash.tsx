import {
  component$,
  useWatch$,
  useStore,
  useMount$,
  $,
  QRL,
} from "@builder.io/qwik";
import ArtistTrackCard from "./artist-track-card";
import trackService from "~/services/track";
import { calcEloRating } from "~/helpers/elo-agorithm";
import ArtistLoadingIcon from "./artist-loading-icon";

interface ArtistSongMashStore {
  indexLeft: number;
  indexRight: number;
  trackLeft: Track;
  trackRight: Track;
  artistAllSongs: Tracks | Track[];
  isLoading: Boolean;
}

const ArtistSongMash = component$(({ artist }: IArtist) => {
  const store: ArtistSongMashStore = useStore(
    {
      indexLeft: 0,
      indexRight: 0,
      trackLeft: { _id: "" },
      trackRight: { _id: "" },
      artistAllSongs: [],
      isLoading: false,
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

  const clickHandler = $(async (event: Event, winner: String) => {
    event.stopPropagation();
    const target = event.target as any;
    console.log(target.localName)
    if (target?.localName !== "iframe") {
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

      store.isLoading = true;

      setTimeout(() => {
        store.isLoading = false;
      }, 1200);
    }
  });

  return (
    <div className="artist-songmash">
      <ArtistTrackCard
        track={store.trackLeft}
        clickHandler={$((e: Event) => clickHandler(e, "left"))}
        isVisible={store.isLoading ? "hidden" : "visible"}
      />
      {store.isLoading ? (
        <ArtistLoadingIcon />
      ) : (
        <div className="versus">vs.</div>
      )}
      <ArtistTrackCard
        track={store.trackRight}
        clickHandler={$((e: Event) => clickHandler(e, "right"))}
        isVisible={store.isLoading ? "hidden" : "visible"}
      />
    </div>
  );
});

export default ArtistSongMash;
