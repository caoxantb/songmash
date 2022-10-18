import { component$, useStyles$ } from "@builder.io/qwik";
import HomeStyles from "~/styles/home.css";
import ArtistsGrid from "./artists-grid";
import Banner from "./banner";

const Home = component$(() => {
  useStyles$(HomeStyles);

  return (
    <div className="home">
      <Banner />
      <ArtistsGrid />
    </div>
  );
});

export default Home;
