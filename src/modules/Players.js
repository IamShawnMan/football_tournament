import mongoose from "mongoose";
import { collections } from "../utils/dbNames.js";

const playerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    max: 100,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
  },
  position: {
    type: String,
    max: 50,
    require: true,
    trim: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: collections.team,
    require: true,
  },
  jerseyNumber: {
    type: Number,
    require: true,
  },
});

export const Player = mongoose.model("player", playerSchema);
