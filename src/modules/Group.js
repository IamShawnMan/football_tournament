import mongoose from "mongoose";
import { collections } from "../utils/dbNames.js";

const groupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      require: true,
      trim: true,
    },
    tournamentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: collections.tournament,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Group = mongoose.model("group", groupSchema);
