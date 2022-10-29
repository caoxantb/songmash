import express from 'express';
import mongoose from 'mongoose';
import 'express-async-errors';
import cors from 'cors';

//middlewares
import { MONGODB_URI } from './utils/config';
import { requestLogger, unknownEndpoint, errorHandler } from './utils/middleware';

//routers
import tracksRouter from './controllers/tracks';
import artistsRouter from './controllers/artists';
import mashesRouter from './controllers/mashes';

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((er) => {
    console.error("error connecting to MongoDB", er.message);
  });

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/api/tracks", tracksRouter);
app.use("/api/artists", artistsRouter);
app.use("/api/mashes", mashesRouter);


app.use(unknownEndpoint);
app.use(errorHandler);

export default app;