import { Team } from "../modules/index.js";

export const teamController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const newTeam = new Team(data);
      await newTeam.save();

      res.json({
        status: "success",
        message: "New team created",
        error: null,
        data: {
          newTeam,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const allTeams = await Team.find();
      res.json({
        status: "success",
        message: "All teams",
        error: null,
        data: {
          allTeams,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneTeam = await Team.findById(id);

      if (!oneTeam) {
        return res.status(404).json({
          message: "Team not found",
        });
      }
      res.json({
        status: "success",
        message: "Team by id",
        error: null,
        data: {
          oneTeam,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const team = await Team.findById(id);
      if (!team) {
        return res.status(404).json({
          message: "Team not found",
        });
      }
      await Team.deleteOne({ _id: id });
      res.json({
        status: "success",
        message: "Team deleted",
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
      const team = await Team.findById(id);
      if (!team) {
        return res.status(404).json({
          message: "Team not found",
        });
      }
      const data = { ...req.body };
      await Team.updateOne({ _id: id }, data);
      res.json({
        status: "success",
        message: "Team edited",
        error: null,
        data: null,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
