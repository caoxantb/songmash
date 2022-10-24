import { component$ } from "@builder.io/qwik";

const ArtistRankingRow = component$(({ head, track, index }) => {
  return head ? (
    <div className="artist-row label">
      <div className="track-rankings track-rankings-no">#</div>
      <div></div>
      <div className="track-rankings track-rankings-title">Tracks</div>
      <div className="track-rankings track-rankings-score">Points</div>
      <div className="track-rankings track-rankings-artist">Artist</div>
      <div className="track-rankings track-rankings-album">Release</div>
      <div className="track-rankings track-rankings-duration">T</div>
    </div>
  ) : (
    <div className="artist-row">
      <div className="track-rankings track-rankings-no">{index + 1}</div>
      <div className="track-rankings track-rankings-img">
        <img src={track.image} alt="" />
      </div>
      <div className="track-rankings track-rankings-title">{track.title}</div>
      <div className="track-rankings track-rankings-score">{track.points}</div>
      <div className="track-rankings track-rankings-artist">{track.artist}</div>
      <div className="track-rankings track-rankings-album">
        {track.release.discType} • {track.release.title} • {track.year}
      </div>
      <div className="track-rankings track-rankings-duration">
        {track.duration}
      </div>
    </div>
  );
});

export default ArtistRankingRow;
