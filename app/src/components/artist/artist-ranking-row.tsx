import { component$ } from "@builder.io/qwik";
import ArtistDurationIcon from "./artist-duration-icon";

interface ArtistRankingRowProps {
  track: Track;
  index: number;
  innerWidth: number;
}

type ArtistRankingHeadProps = Pick<ArtistRankingRowProps, "innerWidth">;

export const ArtistRankingHead = component$(
  ({ innerWidth }: ArtistRankingHeadProps) => {
    return (
      <div className="artist-row label">
        <div className="track-rankings track-rankings-no">#</div>
        <div></div>
        <div className="track-rankings track-rankings-title">Tracks</div>
        <div className="track-rankings track-rankings-score">Score</div>
        {innerWidth >= 768 ? (
          <>
            <div className="track-rankings track-rankings-album">Release</div>
            <div className="track-rankings track-rankings-duration">
              <ArtistDurationIcon/>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
);

export const ArtistRankingRow = component$(
  ({ track, index }: ArtistRankingRowProps) => {
    return (
      <div className="artist-row">
        <div className="track-rankings track-rankings-no">{index + 1}</div>
        <div className="track-rankings track-rankings-img">
          <img src={track.image} alt="" />
        </div>
        <div className="track-rankings track-rankings-title">
          <div className="track-rankings-song-name">{track.title}</div>
          <div>{track.artist}</div>
        </div>
        <div className="track-rankings track-rankings-score">
          {track.points}
        </div>
        {innerWidth >= 768 ? (
          <>
            {" "}
            <div className="track-rankings track-rankings-album">
              {track.release?.discType} • {track.release?.title} • {track.year}
            </div>
            <div className="track-rankings track-rankings-duration">
              {track.duration}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
);
