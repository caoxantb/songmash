import express from "express";
import Mash from "../models/mash";

const mashesRouter = express.Router();

mashesRouter.put(
  "/:artist",
  async (req: express.Request, res: express.Response) => {
    const {
      params: { artist },
      body: { indexes, winner},
    } = req;
    let leftWin: number, rightWin: number
    const oldMash = await Mash.findOne({ artistRef: artist, indexes: indexes })
    if (oldMash) {
      if (winner === 'left') {
        leftWin = oldMash.leftWin + 1
        rightWin = oldMash.rightWin
      } else if (winner === 'right') {
        leftWin = oldMash.leftWin
        rightWin = oldMash.rightWin + 1
      }
    } else {
      if (winner === 'left') {
        leftWin = 1
        rightWin = 0
      } else if (winner === 'right') {
        leftWin = 0
        rightWin = 1
      }
    }
    const updatedMash = await Mash.findOneAndUpdate(
      { artistRef: artist, indexes: indexes },
      { leftWin: leftWin, rightWin: rightWin },
      { new: true, upsert: true }
    );
		res.json(updatedMash)
  }
);

export default mashesRouter;
