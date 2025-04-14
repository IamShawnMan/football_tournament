import { Match } from "../modules/index.js";

export const matchController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const newMatch = new Match(data);
      await newMatch.save();

      res.json({
        status: "success",
        message: "New match created",
        error: null,
        data: {
          newMatch,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const allMatch = await Match.find();
      res.json({
        status: "success",
        message: "All match",
        error: null,
        data: {
          allMatch,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneMatch = await Match.findById(id);

      if (!oneMatch) {
        return res.status(404).json({
          message: "Match not found",
        });
      }
      res.json({
        status: "success",
        message: "Match by id",
        error: null,
        data: {
          oneMatch,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const match = await Match.findById(id);
      if (!match) {
        return res.status(404).json({
          message: "Match not found",
        });
      }
      await Match.deleteOne({ _id: id });
      res.json({
        status: "success",
        message: "Match deleted",
        error: null,
        data: null,
      });
    } catch (error) {
      console.log(error);
    }
  },
  edit: async (req, res, next) => {
    try {
      const { id } = req.params;
      const match = await Match.findById(id);
      if (!match) {
        return res.status(404).json({
          message: "Match not found",
        });
      }
      const data = { ...req.body };
      await Match.updateOne({ _id: id }, data);
      res.json({
        status: "success",
        message: "Match edited",
        error: null,
        data: null,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
