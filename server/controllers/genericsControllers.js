const asyncHandler = require("express-async-handler");
//const User = require("./../models/userModel");
const Generics = require("../models/genericsModel");
const createGenerics = asyncHandler(async (req, res) => {
  const { name, details } = req.body;

  try {
    const existingGenerics = await Generics.findOne({ name: name });
    if (existingGenerics) {
      return res.status(400).json({
        message: "Generics already exists for this name",
      });
    }
    const newGenerics = new Generics({
      name,
      details,
    });
    const saveGenerics = await newGenerics.save();
    res.status(201).json({
      message: "Generics create successfully",
      data: saveGenerics,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create Generics",
      error: error.message,
    });
  }
});

const getAllGenerics = asyncHandler(async (req, res) => {
  try {
    const generics = await Generics.find({});
    res.status(200).json({
      message: "A list of all Generics",
      data: generics,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving Generics", error: error.message });
  }
});

const findById = asyncHandler(async (req, res) => {
  try {
    const generics = await Generics.findById(req.params.id);
    if (!generics) {
      res.status(404).json({
        message: "Branch not found",
      });
    } else {
      res.json(generics);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error finding generics", error: error.message });
  }
});

const updateGenerics = asyncHandler(async (req, res) => {
  try {
    const { name, details } = req.body;
    const generics = await Generics.findById(req.params.id);
    if (!generics) {
      res.status(404).json({
        message: "Generics not found",
      });
      return;
    }
    generics.name = name || generics.name;
    generics.details = details || generics.details;

    const saveData = await generics.save();
    res.status(200).json({
      message: "Generics update successfully",
      data: saveData,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid update error",
      error: error.message,
    });
  }
});

const deleteGenerics = asyncHandler(async (req, res) => {
  try {
    const generics = await Generics.findByIdAndDelete(req.params.id);
    if (!generics) {
      res.status(404).json({ message: "Generics not found" });
      return;
    }
    res.json({ message: "Generics deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Generics", error: error.message });
  }
});

module.exports = {
  createGenerics,
  getAllGenerics,
  updateGenerics,
  findById,
  deleteGenerics,
};
