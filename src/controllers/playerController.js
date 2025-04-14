import { Player } from "../modules/index.js";

export const playerController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const newPlayer = new Player(data);
      await newPlayer.save();

      res.json({
        status: "success",
        message: "New player created",
        error: null,
        data: {
          newPlayer,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const allPlayers = await Player.find();
      res.json({
        status: "success",
        message: "All players",
        error: null,
        data: {
          allPlayers,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const onePlayer = await Player.findById(id);

      if (!onePlayer) {
        return res.status(404).json({
          message: "Player not found",
        });
      }
      res.json({
        status: "success",
        message: "Player by id",
        error: null,
        data: {
          onePlayer,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const player = await Player.findById(id);
      if (!player) {
        return res.status(404).json({
          message: "Player not found",
        });
      }
      await Player.deleteOne({ _id: id });
      res.json({
        status: "success",
        message: "Player deleted",
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
      const player = await Player.findById(id);
      if (!player) {
        return res.status(404).json({
          message: "Player not found",
        });
      }
      const data = { ...req.body };
      await Player.updateOne({ _id: id }, data);
      res.json({
        status: "success",
        message: "Player edited",
        error: null,
        data: null,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
