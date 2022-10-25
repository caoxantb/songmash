import {
  component$,
  useStore,
  useServerMount$,
  useContextProvider,
  createContext,
} from "@builder.io/qwik";
import ArtistCard from "./artist-card";
import artistService from "~/services/artist";

interface ArtistsGridStore {
  artists: Artists;
}

const ArtistsGrid = component$(() => {
  const store: ArtistsGridStore = useStore(
    {
      artists: [],
    },
    { recursive: true }
  );

  useServerMount$(async () => {
    store.artists = await artistService.getAllArtists();
  });

  return (
    <div className="artists-grid">
      {store.artists.map((artist) => (
        <div>
          <ArtistCard artist={artist} />
        </div>
      ))}
    </div>
  );
});

export default ArtistsGrid;
