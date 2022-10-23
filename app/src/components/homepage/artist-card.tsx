import { component$, useContext } from "@builder.io/qwik";
import { ArtistsContext } from "./artists-grid";

const ArtistsCard = component$(() => {
  const store: any = useContext(ArtistsContext);

  return store.artists.map((artist: any) => {
    return (
      <a href={`/${artist.nameRef}`}>
        <div className="artist-card">
          <img src={artist.avatarImg} alt="" />
          <p className="artist-card-name">{artist.name.toUpperCase()}</p>
        </div>
      </a>
    );
  });
});

export default ArtistsCard;
