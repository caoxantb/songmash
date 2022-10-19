import { component$, useStyles$ } from "@builder.io/qwik";
import ArtistStyles from "~/styles/artist.css";
import ArtistSongMash from "./artist-songmash";
// import ArtistBio from "./artist-bio";
import ArtistToggler from "./artist-toggler";

const ArtistPage = component$(() => {
  useStyles$(ArtistStyles);

  return (
    <div className="artist-page">
      <div className="artist-banner">
        <p className="artist-main-title">CÁ HỒI HOANG</p>
      </div>
      <ArtistToggler />
      {/* <ArtistBio /> */}
      <ArtistSongMash />
    </div>
  );
});

export default ArtistPage;
