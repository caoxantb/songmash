import { component$ } from "@builder.io/qwik";

const ArtistTrackCard = component$(() => {
  return (
    <div className="artist-song-card">
      <img
        src="https://i.scdn.co/image/ab67616d0000b27356f1ed1ce0ff2f4de19186d3"
        alt=""
      />
      <p className="artist-song-name">Thấy Chưa</p>
      <p>
        <i>Single • 2022</i>
      </p>
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/track/4CjJf5bzvv5ZuLf2FJqlWY?utm_source=generator"
        width="100%"
        height="100"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
});

export default ArtistTrackCard;
