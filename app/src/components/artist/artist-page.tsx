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

interface ArtistPageStore {
  artist: Artist;
  toggle: 'biography' | 'songmash' | 'rankings'
}

const ArtistPage = component$(() => {
  useStyles$(ArtistStyles);

  const location = useLocation();

  const store: ArtistPageStore = useStore(
    { artist: {nameRef: ''}, toggle: "biography" },
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
      <div
        className="artist-banner"
        style={{
          background:
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${store.artist.bannerImg}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <p className="artist-main-title">{store.artist.name?.toUpperCase()}</p>
      </div>
      <div className="artist-main-section">
        <ArtistToggler clickHandler={clickHandler} toggle={store.toggle} />
        {store.toggle === "biography" ? (
          <ArtistBio artist={store.artist} />
        ) : store.toggle === "songmash" ? (
          <ArtistSongMash artist={store.artist} />
        ) : (
          <ArtistRankings artist={store.artist} />
        )}
      </div>
    </div>
  );
});

export default ArtistPage;
