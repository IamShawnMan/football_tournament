import express from "express";
import clubRouter from "./routers/clubRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/club", clubRouter);

export default app;
