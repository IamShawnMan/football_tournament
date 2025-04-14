import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    clubName: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      min: 5,
    },
    city: {
      type: String,
      require: true,
      trim: true,
      min: 5,
    },
    country: {
      type: String,
      require: true,
      trim: true,
      min: 5,
    },
    foundedYear: {
      type: Number,
      require: true,
      trim: true,
      min: 1800,
      max: 2025,
    },
  },
  {
    timestamps: true,
  }
);

export const Club = mongoose.model("club", clubSchema);
