import { Tournament } from "../modules/index.js";

export const tournamentController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const newTournament = new Tournament(data);
      await newTournament.save();

      res.json({
        status: "success",
        message: "New tounament created",
        error: null,
        data: {
          newTournament,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const allTournaments = await Tournament.find();
      res.json({
        status: "success",
        message: "All tounaments",
        error: null,
        data: {
          allTournaments,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneTournament = await Tournament.findById(id);

      if (!oneTournament) {
        return res.status(404).json({
          message: "Tournament not found",
        });
      }
      res.json({
        status: "success",
        message: "Tournament by id",
        error: null,
        data: {
          oneTournament,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const tounament = await Tournament.findById(id);
      if (!tounament) {
        return res.status(404).json({
          message: "Tournament not found",
        });
      }
      await Tournament.deleteOne({ _id: id });
      res.json({
        status: "success",
        message: "Tournament deleted",
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
      const tournament = await Tournament.findById(id);
      if (!tournament) {
        return res.status(404).json({
          message: "Tournament not found",
        });
      }
      const data = { ...req.body };
      await Tournament.updateOne({ _id: id }, data);
      res.json({
        status: "success",
        message: "Tournament edited",
        error: null,
        data: null,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
