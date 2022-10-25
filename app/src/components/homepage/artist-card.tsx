import { component$ } from "@builder.io/qwik";

const ArtistCard = component$(({ artist }: IArtist) => {
  return (
    <a href={`/${artist.nameRef}`}>
      <div className="artist-card">
        <img src={artist.avatarImg} alt="" />
        <p className="artist-card-name">{artist.name.toUpperCase()}</p>
      </div>
    </a>
  );
});

export default ArtistCard;
