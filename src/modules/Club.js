import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
  {
    clubName: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    city: {
      type: String,
      require: true,
      trim: true,
    },
    country: {
      type: String,
      require: true,
      trim: true,
    },
    foundedYear: {
      type: Number,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Club = mongoose.model("club", clubSchema);
