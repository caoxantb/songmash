import {
  component$,
  useStore,
  useServerMount$,
  useContextProvider,
  createContext,
} from "@builder.io/qwik";
import ArtistsCard from "./artist-card";
import artistService from "~/services/artist";

export const ArtistsContext = createContext("artists-context");

const ArtistsGrid = component$(() => {
  const store = useStore(
    {
      artists: [],
    },
    { recursive: true }
  );

  useServerMount$(async () => {
    store.artists = await artistService.getAllArtists();
  });

  useContextProvider(ArtistsContext, store);

  return (
    <div className="artists-grid">
      <ArtistsCard />
    </div>
  );
});

export default ArtistsGrid;
