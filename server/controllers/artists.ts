import express from "express";
import Artist from "../models/artist";

const artistsRouter = express.Router();

artistsRouter.get("/", async (req: express.Request, res: express.Response) => {
  const artists = await Artist.find({});
  res.json(artists);
});

artistsRouter.get(
  "/:nameRef",
  async (req: express.Request, res: express.Response) => {
    const { nameRef } = req.params;
    const artist = await Artist.findOne({ nameRef: nameRef });
    res.json(artist);
  }
);

artistsRouter.post("/", async (req: express.Request, res: express.Response) => {
  const { body } = req;
  const artistCreated = await Artist.create({ ...body });
  res.status(201).json(artistCreated);
});

export default artistsRouter;
