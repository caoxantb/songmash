import express from "express";
import Track from "../models/track";
import Artist from "../models/artist";
import { scrapeTracksFromSpotify } from "../utils/middleware";

const tracksRouter = express.Router();

tracksRouter.get("/:artistRef", async (req, res) => {
  const { artistRef } = req.params;
  const artist: any = await Artist.find({nameRef: artistRef})
  const tracks = await Track.find({ artist: artist.name });
  res.json(tracks);
});

tracksRouter.post(
  "/:artistRef/:index",
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
  } = req;

  const updatedTrack = await Track.findByIdAndUpdate(id, {
    points: body.points,
  });

  res.json(updatedTrack);
});

export default tracksRouter;
