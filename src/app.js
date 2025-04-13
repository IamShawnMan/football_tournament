import express from "express";
import clubRouter from "./routers/clubRoutes.js";
import tournamnetRouter from "./routers/tournamentRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/club", clubRouter);
app.use("/api/v1/tournament", tournamnetRouter);

export default app;
