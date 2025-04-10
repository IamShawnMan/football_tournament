import { Club } from "../modules/index.js";

export const createClub = async (req, res, next) => {
  try {
    const data = req.body;
    const newClub = new Club(data);
    await newClub.save();

    res.json({
      status: "success",
      message: "New Club Created",
      error: null,
      data: {
        newClub,
      },
    });
  } catch (error) {}
};

export const getAllClubs = async (req, res, next) => {};
