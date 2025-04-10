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
  } catch (error) {
    return res.send(error);
  }
};

export const getAllClubs = async (req, res, next) => {
  try {
    const allClubs = await Club.find();

    res.json({
      status: "success",
      message: "All clubs",
      error: null,
      data: {
        allClubs,
      },
    });
  } catch (error) {
    return res.send(error);
  }
};

export const getClubById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const clubById = await Club.findById(id);
    if (!clubById) {
      return res.status(404).json({
        message: "Club not found",
      });
    }
    res.json({
      status: "success",
      message: "club by id",
      error: null,
      data: {
        clubById,
      },
    });
  } catch (error) {
    return res.send(error);
  }
};

export const deleteClub = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletingClub = await Club.findById(id);
    if (!deletingClub) {
      return res.send("Club not found");
    }
    await Club.deleteOne({
      _id: id,
    });
    res.json({
      status: "success",
      message: "Club deleted",
      error: null,
      data: null,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const editClub = async (req, res, next) => {
  try {
    const { id } = req.params;
    const editingClub = await Club.findById(id);
    if (!editingClub) {
      return res.send("Club not found");
    }
    const data = { ...req.body };
    await Club.updateOne({ _id: id }, data);
    res.json({
      status: "success",
      message: "Club edited",
      error: null,
      data: null,
    });
  } catch (error) {
    return res.send(error);
  }
};
