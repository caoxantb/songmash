import express from "express";
import Artist from "../models/artist";

const artistsRouter = express.Router();

artistsRouter.get("/", async (req: express.Request, res: express.Response) => {
  const artists = await Artist.find({});
  res.json(artists);
});

artistsRouter.post("/", async (req: express.Request, res: express.Response) => {
  const { body } = req;
  const artistCreated = await Artist.create({ ...body });
  res.status(201).json(artistCreated);
});

export default artistsRouter;
