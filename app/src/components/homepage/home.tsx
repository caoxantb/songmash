import {
  component$,
  useStyles$,
  useStore,
  useMount$,
} from "@builder.io/qwik";
import HomeStyles from "~/styles/home.css";
import ArtistsGrid from "./artists-grid";
import Banner from "./banner";
import artistService from "~/services/artist";

interface ArtistsGridStore {
  artists: Artists;
}

const Home = component$(() => {
  useStyles$(HomeStyles);

  const store: ArtistsGridStore = useStore(
    {
      artists: [],
    },
    { recursive: true }
  );

  useMount$(async () => {
    store.artists = await artistService.getAllArtists();
  });

  return (
    <div className="home">
      <Banner />
      <ArtistsGrid artists={store.artists} />
    </div>
  );
});

export default Home;
