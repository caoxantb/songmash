import {
  component$,
  useStore,
  useServerMount$,
  useContextProvider,
  createContext,
} from "@builder.io/qwik";
import ArtistCard from "./artist-card";
import artistService from "~/services/artist";

interface ArtistGridProps {
  artists: Artists
}

const ArtistsGrid = component$(({artists}: ArtistGridProps) => {
  return (
    <div className="artists-grid">
      {artists.map((artist) => (
          <ArtistCard artist={artist} />
      ))}
    </div>
  );
});

export default ArtistsGrid;
