import mongoose from "mongoose";
import { collections } from "../utils/dbNames";

const teamsSchema = new mongoose.Schema({
  teamName: {
    type: String,
    ref: collections.group,
    max: 100,
  },
  clubId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: collections.group,
    require: true,
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: collections.group,
    require: true,
  },
  coachName: {
    type: String,
    max: 100,
    require: true,
    trim: true,
  },
});

export const Team = mongoose.model("team", teamsSchema);
