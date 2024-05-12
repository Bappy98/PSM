const asyncHandler = require("express-async-handler");
//const User = require("./../models/userModel");
const Company = require("../models/companyModel");
const createCompany = asyncHandler(async (req, res) => {
  const { name, address, phone, logo } = req.body;

  try {
    const existingCompany = await Company.findOne({ name: name });
    if (existingCompany) {
      return res.status(400).json({
        message: "Company already exists for this name",
      });
    }
    const newCompany = new Company({
      name,
      address,
      phone,
      logo,
    });
    const saveCompany = await newCompany.save();
    res.status(201).json({
      message: "Branch create successfully",
      data: saveCompany,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create company",
      error: error.message,
    });
  }
});

const getAllCompany = asyncHandler(async (req, res) => {
  try {
    const company = await Company.find({});
    res.status(200).json({
      message: "A list of all Branch",
      data: company,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving company", error: error.message });
  }
});

const findById = asyncHandler(async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      res.status(404).json({
        message: "Branch not found",
      });
    } else {
      res.json(company);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error finding company", error: error.message });
  }
});

const updateCompany = asyncHandler(async (req, res) => {
  try {
    const { address, logo, phone, name } = req.body;
    const company = await Company.findById(req.params.id);
    if (!company) {
      res.status(404).json({
        message: "Company not found",
      });
      return;
    }
    company.address = address || company.address;
    company.logo = logo || company.logo;
    company.phone = phone || company.phone;
    company.name = name || company.name;
    const saveData = await company.save();
    res.status(200).json({
      message: "Company update successfully",
      data: saveData,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid update error",
      error: error.message,
    });
  }
});

const deleteCompany = asyncHandler(async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      res.status(404).json({ message: "Company not found" });
      return;
    }
    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete Company", error: error.message });
  }
});

module.exports = {
  createCompany,
  getAllCompany,
  updateCompany,
  findById,
  deleteCompany,
};
