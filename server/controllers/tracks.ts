import express from "express";
import Track from "../models/track";
import Artist from "../models/artist";
import { scrapeTracksFromSpotify } from "../utils/middleware";

const tracksRouter = express.Router();

tracksRouter.get(
  "/:artistRef",
  async (req: express.Request, res: express.Response) => {
    const { artistRef } = req.params;
    const artist = await Artist.findOne({ nameRef: artistRef });
    const tracks = await Track.find({ artist: artist["name"] });
    res.json(tracks);
  }
);

tracksRouter.get("/:id", async (req: express.Request, res: express.Response) => {
  const {id} = req.params;
  const track = await Track.findById(id)
  res.json(track)
})

tracksRouter.post(
  "/:artistRef/:index",
  scrapeTracksFromSpotify,
  async (_req: express.Request, res: express.Response) => {
    const trackToPost = res.track;
    const trackCreated = await Track.create({ ...trackToPost });
    res.status(201).json(trackCreated);
  }
);

tracksRouter.put(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    const {
      body,
      params: { id },
    } = req;

    const updatedTrack = await Track.findByIdAndUpdate(id, {
      points: body.points,
    });

    res.json(updatedTrack);
  }
);

export default tracksRouter;
