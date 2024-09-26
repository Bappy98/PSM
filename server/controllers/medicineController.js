const asyncHandler = require("express-async-handler");
const Medicine = require("./../models/medicineModle");
const Dosages = require("../models/dosagesModel");
const Company = require("../models/companyModel");
const Generics = require("../models/genericsModel");
const User = require("../models/userModel");
const Stock = require("../models/stockModle");
const cerateMedicine = asyncHandler(async (req, res) => {
  const {
    name,
    weight,
    unitPrice,
    dosages,
    generics,
    company,
    type,
    description,
    image,
  } = req.body;
  try {
    // const dosage = await Dosages.findOne({ name: dosages });
    const singleCompany = await Company.findOne({ name: company });
    // const generic = await Generics.findOne({ name: generics });

    const existingMedicine = await Medicine.findOne({ name: name });
    if (existingMedicine) {
      return res.status(400).json({
        message: "Medicine already exists for this name",
      });
    }
    if (singleCompany) {
      const newMedicine = new Medicine({
        name,
        weight,
        unitPrice,
        dosages,
        generics,
        company: singleCompany._id,
        description,
        type,
        image,
      });
      const data = await newMedicine.save();

      const users = await User.find({});
      const stockEntries = users.map((user) => ({
        user: user._id,
        medicine: newMedicine._id,
        quantity: 0,
      }));
      await Stock.insertMany(stockEntries);

      res.status(201).json({
        massage: "Medicine create successfully",
        data,
      });
    } else {
      return res.status(400).json({
        message: "Invalid input",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Failed to create Medicine",
      error: error.message,
    });
  }
});

const getAllMedicine = asyncHandler(async (req, res) => {
  try {
    const data = await Medicine.find({}).populate('company');
    res.status(200).json(
      data
    );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving Medicine", error: error.message });
  }
});

const findById = asyncHandler(async (req, res) => {
  try {
    const singleMedicine = await Medicine.findById(req.params.id);
    if (!singleMedicine) {
      res.status(404).json({
        message: "Medicine not found",
      });
    } else {
      res.json(singleMedicine);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error finding medicine", error: error.message });
  }
});

const updateMedicine = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      weight,
      unitPrice,
      dosages,
      generics,
      company,
      type,
      description,
      image,
    } = req.body;
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      res.status(404).json({
        message: "Medicine not found",
      });
      return;
    }
    medicine.name = name || medicine.name;
    medicine.image = image || medicine.image;
    medicine.weight = weight || medicine.weight;
    medicine.unitPrice = unitPrice || medicine.unitPrice;
    medicine.type = type || medicine.type;
    medicine.dosages = dosages || medicine.dosages;
    medicine.generics = generics || medicine.generics;
    medicine.company = company || medicine.company;
    medicine.description = description || medicine.description;
    const saveData = await medicine.save();

    await Stock.updateMany(
      { medicine: req.params.id },
      { $set: { medicine: medicine._id } }
    );

    res.status(200).json({
      message: "Medicine update successfully",
      data: saveData,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid update error",
      error: error.message,
    });
  }
});

const deleteMedicine = asyncHandler(async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) {
      res.status(404).json({ message: "Medicine not found" });
      return;
    }
    await Stock.deleteMany({ medicine: req.params.id });

    res.json({ message: "Medicine deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Medicine", error: error.message });
  }
});

module.exports = {
  cerateMedicine,
  getAllMedicine,
  findById,
  updateMedicine,
  deleteMedicine,
};
