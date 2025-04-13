import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  tournamentName: {
    type: String,
    require: true,
    trim: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  status: {
    type: String,
    default: "upcoming",
    require: true,
  },
});

export const Tournament = mongoose.model("tournament", tournamentSchema);
