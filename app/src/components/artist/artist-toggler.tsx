import { component$ } from "@builder.io/qwik";

const ArtistToggler = component$(({ clickHandler, toggle }) => {
  return (
    <div className="artist-toggler">
      <div
        id="biography"
        className={`artist-toggle-section ${
          toggle === "biography" ? "active" : ""
        }`}
        onClick$={clickHandler}
      >
        BIOGRAPHY
      </div>
      <div
        id="songmash"
        className={`artist-toggle-section ${
          toggle === "songmash" ? "active" : ""
        }`}
        onClick$={clickHandler}
      >
        SONG • MASH
      </div>
      <div
        id="rankings"
        className={`artist-toggle-section ${
          toggle === "rankings" ? "active" : ""
        }`}
        onClick$={clickHandler}
      >
        RANKINGS
      </div>
    </div>
  );
});

export default ArtistToggler;
