import express from "express";
import Track from "../models/track";
import Artist from "../models/artist";

const artistsRouter = express.Router();

artistsRouter.post("/", async (req, res) => {
  const { body } = req;
  const artistCreated = await Artist.create({ ...body });
  res.status(201).json(artistCreated);
});

export default artistsRouter;
