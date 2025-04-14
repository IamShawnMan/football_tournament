import { Group } from "../modules/index.js";

export const groupController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      const newGroup = new Group(data);
      await newGroup.save();

      res.json({
        status: "success",
        message: "New group created",
        error: null,
        data: {
          newGroup,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const allGroups = await Group.find();
      res.json({
        status: "success",
        message: "All Groups",
        error: null,
        data: {
          allGroups,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneGroup = await Group.findById(id);

      if (!oneGroup) {
        return res.status(404).json({
          message: "Group not found",
        });
      }
      res.json({
        status: "success",
        message: "Group by id",
        error: null,
        data: {
          oneGroup,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const group = await Group.findById(id);
      if (!group) {
        return res.status(404).json({
          message: "Group not found",
        });
      }
      await Group.deleteOne({ _id: id });
      res.json({
        status: "success",
        message: "Group deleted",
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
      const group = await Group.findById(id);
      if (!group) {
        return res.status(404).json({
          message: "Group not found",
        });
      }
      const data = { ...req.body };
      await Group.updateOne({ _id: id }, data);
      res.json({
        status: "success",
        message: "Group edited",
        error: null,
        data: null,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
