const asyncHandler = require("express-async-handler");
const Medicine = require("./../models/medicineModle");
const Dosages = require("../models/dosagesModel");
const Company = require("../models/companyModel");
const Generics = require("../models/genericsModel");
const cerateMedicine = asyncHandler(async (req, res) => {
  const { name, weight, unitPrice, dosages, generics, company } = req.body;
  try {
    const dosage = await Dosages.findOne({ name: dosages });
    const singleCompany = await Company.findOne({ name: company });
    const generic = await Generics.findOne({ name: generics });

    const existingMedicine = await Medicine.findOne({ name: name });
    if (existingMedicine) {
      return res.status(400).json({
        message: "Medicine already exists for this name",
      });
    }
    if (dosage && singleCompany && generic) {
      const newMedicine = new Medicine({
        name,
        weight,
        unitPrice,
        dosages: dosage._id,
        generics: generic._id,
        company: singleCompany._id,
      });
      await newMedicine.save();
      res.status(201).json({
        massage:"Medicine create successfully",
        data:newMedicine
      })
    }
    else {
        return res.status(400).json({
            message:"Invalid input"
        })
    }
  } catch (error) {
    res.status(400).json({
        message: "Failed to create Generics",
        error: error.message,
      });
  }
});

const getAllMedicine = asyncHandler(async (req, res) => {
    try {
      const medicine = await Medicine.find({});
      res.status(200).json({
        message: "A list of all Medicine",
        data: medicine,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error retrieving Medicine", error: error.message });
    }
  });

const findById = asyncHandler(async(req,res)=>{
 try {
   const singleMedicine = await Medicine.findById(req.params.id)
  if(!singleMedicine) {
    res.status(404).json({
        message: "Medicine not found",
      })
  } else {
    res.json(singleMedicine)
  }
 } catch (error) {
   res
      .status(500)
      .json({ message: "Error finding medicine", error: error.message });
 }
})