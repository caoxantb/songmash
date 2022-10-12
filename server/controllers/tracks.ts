import express from "express";
import Track from "../models/track";
import { scrapeTracksFromSpotify } from "../utils/middleware";

const tracksRouter = express.Router();

const trans = {
  ngot: "Ngọt",
};

tracksRouter.get("/:artist", async (req, res) => {
  const { artist } = req.params;
  const tracks = await Track.find({ artist: trans[artist] });
  res.json(tracks);
});

tracksRouter.post(
  "/:artist/:trackIndex",
  scrapeTracksFromSpotify,
  async (req, res) => {
    const trackToPost = res.track;
    const trackCreated = await Track.create({ ...trackToPost });
    res.status(201).json(trackCreated);
  }
);

tracksRouter.put("/:id", async (req, res) => {
  const {
    body,
    params: { id },
  } = req.params;

  const updatedTrack = await Track.findByIdAndUpdate(id, {
    points: body.points,
  });

  res.json(updatedTrack);
});

export default tracksRouter;
