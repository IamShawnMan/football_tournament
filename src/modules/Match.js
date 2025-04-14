import mongoose from "mongoose";
import { collections } from "../utils/dbNames.js";

const matchSchema = new mongoose.Schema({
  matchDate: {
    type: Date,
    require: true,
  },
  venue: {
    type: String,
    max: 100,
  },
  homeTeamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: collections.team,
    require: true,
  },
  awayTeamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: collections.team,
    require: true,
  },
  homeScore: {
    type: Number,
    default: 0,
    require: true,
  },
  awayScore: {
    type: Number,
    default: 0,
    require: true,
  },
  tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  matchStatus: {
    type: String,
    max: 20,
    default: "scheduled",
  },
});

export const Match = mongoose.model("match", matchSchema);
