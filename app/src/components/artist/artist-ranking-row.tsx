import { component$ } from "@builder.io/qwik";

const ArtistRankingRow = component$(() => {
  return (
    <div className="artist-row">
      <div className="track-rankings track-rankings-no">1</div>
      <div className="track-rankings track-rankings-img">
        {" "}
        <img
          width={"100%"}
          src="https://i.scdn.co/image/ab67616d0000b27356f1ed1ce0ff2f4de19186d3"
          alt=""
        />
      </div>
      <div className="track-rankings track-rankings-title">Thay Chua</div>
      <div className="track-rankings track-rankings-score">2456</div>
      <div className="track-rankings track-rankings-artist">Ngot</div>
      <div className="track-rankings track-rankings-album">Thay Chua</div>
      <div className="track-rankings track-rankings-duration">4:23</div>
    </div>
  );
});

export default ArtistRankingRow;
