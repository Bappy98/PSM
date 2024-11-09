const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");
const Branch = require("../models/branchModle");
const Medicine = require("../models/medicineModle");
const Stock = require("../models/stockModle");
const createBranch = asyncHandler(async (req, res) => {
  const { name, address, phone, logo } = req.body;
  try {
    const user = await User.findOne({ name: name });
    if (!user) {
      res.status(404).json({
        message: "user not found",
      });
      return;
    }
    const existingBranch = await Branch.findOne({ user_id: user._id });
    if (existingBranch) {
      return res.status(400).json({
        message: "Branch already exists for this user",
      });
    }
    const medicine = await Medicine.find({})
    const stockEntries = medicine.map((item)=>({
      user:user._id,
      medicine:item._id,
      quantity: 0,
    }))
    await Stock.insertMany(stockEntries)
    const newBranch = new Branch({
      user_id: user.id,
      address,
      phone,
      logo,
    });

    const saveBranch = await newBranch.save();
    res.status(201).json({
      message: "Branch create successfully",
      data: saveBranch,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create branch",
      error: error.message,
    });
  }
});

const getAllBranch = asyncHandler(async (req, res) => {
  try {
    const branch = await Branch.find({}).populate({
      path: 'user_id',
      select: 'name email' // Specify the fields you want to populate
    });
    res.status(200).json(branch);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving branch", error: error.message });
  }
});

const findById = asyncHandler(async (req, res) => {
  try {
    const branches = await Branch.find({ user_id: req.params.id }); // Find all branches by userId

    if (branches.length === 0) {
      return res.status(404).json({
        message: "No branches found for this user",
      });
    } else {
      res.json(branches);
    }
  } catch (error) {
    res.status(500).json({ message: "Error finding branches", error: error.message });
  }
});

const updateBranch = asyncHandler(async (req, res) => {
  try {
    const { address, logo, phone } = req.body;
    const branch = await Branch.findById(req.params.id);
    if (!branch) {
      res.status(404).json({
        message: "Branch not found",
      });
      return;
    }
    branch.address = address || branch.address;
    branch.logo = logo || branch.logo;
    branch.phone = phone || branch.phone;
    const saveData = await branch.save();
    res.status(200).json({
      message: "Branch update successfully",
      data: saveData,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid update error",
      error: error.message,
    });
  }
});

const deleteBranch = asyncHandler(async (req, res) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id);
    if (!branch) {
      res.status(404).json({ message: "Branch not found" });
      return;
    }
    res.json({ message: "Branch deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete branch", error: error.message });
  }
});

module.exports = {
  createBranch,
  getAllBranch,
  findById,
  updateBranch,
  deleteBranch,
};
