const asyncHandler = require("express-async-handler");
//const User = require("./../models/userModel");
const Dosages = require("../models/dosagesModel");
const createDosages = asyncHandler(async (req, res) => {
  const { name, icon } = req.body;

  try {
    const existingDosages = await Dosages.findOne({ name: name });
    if (existingDosages) {
      return res.status(400).json({
        message: "Dosages already exists for this name",
      });
    }
    const newDosages = new Dosages({
      name,
      icon,
    });
    const saveDosages = await newDosages.save();
    res.status(201).json({
      message: "Dosages create successfully",
      data: saveDosages,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create Dosages",
      error: error.message,
    });
  }
});

const getAllDosages = asyncHandler(async (req, res) => {
  try {
    const dosages = await Dosages.find({});
    res.status(200).json({
      message: "A list of all Dosages",
      data: dosages,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving Dosages", error: error.message });
  }
});

const findById = asyncHandler(async (req, res) => {
  try {
    const dosages = await Dosages.findById(req.params.id);
    if (!dosages) {
      res.status(404).json({
        message: "Branch not found",
      });
    } else {
      res.json(dosages);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error finding dosages", error: error.message });
  }
});

const updateDosages = asyncHandler(async (req, res) => {
  try {
    const { name, icon } = req.body;
    const dosages = await Dosages.findById(req.params.id);
    if (!dosages) {
      res.status(404).json({
        message: "Dosages not found",
      });
      return;
    }
    dosages.name = name || dosages.name;
    dosages.icon = icon || dosages.icon;

    const saveData = await dosages.save();
    res.status(200).json({
      message: "Dosages update successfully",
      data: saveData,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid update error",
      error: error.message,
    });
  }
});

const deleteDosages = asyncHandler(async (req, res) => {
  try {
    const dosages = await Dosages.findByIdAndDelete(req.params.id);
    if (!dosages) {
      res.status(404).json({ message: "Dosages not found" });
      return;
    }
    res.json({ message: "Dosages deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Dosages", error: error.message });
  }
});

module.exports = {
  createDosages,
  getAllDosages,
  updateDosages,
  findById,
  deleteDosages,
};
