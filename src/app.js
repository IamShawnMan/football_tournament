import express from "express";
import clubRouter from "./routers/clubRoutes.js";
import tournamnetRouter from "./routers/tournamentRoutes.js";
import groupRouter from "./routers/groupRouter.js";
import matchRouter from "./routers/matchRouter.js";
import playerRouter from "./routers/playerRouter.js";
import teamRouter from "./routers/teamRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

app.use("/api/v1/club", clubRouter);
app.use("/api/v1/tournament", tournamnetRouter);
app.use("/api/vi/group", groupRouter);
app.use("/api/v1/match", matchRouter);
app.use("/api/v1/player", playerRouter);
app.use("/api/v1/team", teamRouter);

app.use(errorHandler);

export default app;
