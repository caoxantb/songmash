import jsdom from "jsdom";
import fetch from "node-fetch";

// config and error handling
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  next(error);
};

const artistPlaylistUrl = {
  ngot: "https://open.spotify.com/playlist/1T35763llI8RIDYDbmtrlf",
};

const fetchSpotify = async (url: string) => {
  const fetchResponse = await fetch(url);
  const html = await fetchResponse.text();
  const parsedHTML = new jsdom.JSDOM(html);
  return parsedHTML;
};

const scrapeTracksFromSpotify = async (req, res, next) => {
  const { artist, trackIndex } = req.params;
  const playlistHTML = await fetchSpotify(artistPlaylistUrl[artist]);
  const trackHTML =
    playlistHTML.window.document.querySelectorAll('[type="track"]')[trackIndex - 1];
  const trackData = trackHTML.querySelector("a");
  const trackTitle = trackData.textContent;
  const trackSrc = trackData.href;
  const trackMetaHTML = await fetchSpotify(trackSrc);
  const trackImg = trackMetaHTML.window.document.querySelector('[data-testid="entity-image"]').src
  const trackMetaData = trackMetaHTML.window.document.querySelector(
    '[data-testid="track-entity-metadata"]'
  );
  const artistName = trackMetaData.children[0].textContent
  const trackReleaseYear = trackMetaData.children[1].textContent;
  const trackDuration = trackMetaData.children[2].textContent;
  const trackRelease = trackMetaHTML.window.document
    .querySelector('[data-testid="rich-track-data"]')
    .children[4];
  const trackReleaseType = trackRelease.querySelector('span').textContent
  const trackReleaseTitle = trackRelease.querySelector('a').textContent
  const track = {
    title: trackTitle,
    artist: artistName,
    release: {
      discType: trackReleaseType,
      title: trackReleaseTitle,
    },
    year: trackReleaseYear,
    duration: trackDuration,
    image: trackImg,
    src: trackSrc,
    points: 1400,
  }
  console.log(track)
  res.track = track
  next();
};

export {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  scrapeTracksFromSpotify,
};
