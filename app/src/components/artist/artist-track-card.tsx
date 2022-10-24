import { component$ } from "@builder.io/qwik";

const ArtistTrackCard = component$(({ track, clickHandler }) => {
  return (
    <div onClick$={clickHandler} className="artist-song-card">
      <img src={track.image} alt="" />
      <p className="artist-song-name">{track.title}</p>
      <p>
        <i>
          {track.release.discType} • {track.release.title} • {track.year}
        </i>
      </p>
      <iframe
        style="border-radius:12px"
        src={`${track.src.replace(
          "/track",
          "/embed/track"
        )}?utm_source=generator`}
        width="100%"
        height="100"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media;"
        loading="lazy"
      />
    </div>
  );
});

export default ArtistTrackCard;
