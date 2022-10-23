import {
  component$,
  useStyles$,
  useServerMount$,
  useStore,
  $,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import ArtistStyles from "~/styles/artist.css";
import ArtistSongMash from "./artist-songmash";
import ArtistBio from "./artist-bio";
import ArtistRankings from "./artist-rankings";
import ArtistToggler from "./artist-toggler";
import artistService from "~/services/artist";

const ArtistPage = component$(() => {
  useStyles$(ArtistStyles);
  const location = useLocation();

  const store: any = useStore(
    { artist: {}, toggle: "biography" },
    { recursive: true }
  );

  useServerMount$(async () => {
    store.artist = await artistService.getArtistByNameRef(
      location.params.artist
    );
  });

  const clickHandler = $((e: any) => {
    store.toggle = e.target.id;
    console.log(e.target.id);
  });

  return (
    <div className="artist-page">
      <div className="artist-banner">
        <p className="artist-main-title">{store.artist.name?.toUpperCase()}</p>
      </div>
      <ArtistToggler clickHandler={clickHandler} toggle={store.toggle} />
      {store.toggle === "biography" ? (
        <ArtistBio />
      ) : store.toggle === "songmash" ? (
        <ArtistSongMash artist={store.artist} />
      ) : (
        <ArtistRankings />
      )}
    </div>
  );
});

export default ArtistPage;
