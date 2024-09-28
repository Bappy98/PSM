const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Stock = require("../models/stockModle");
const Sell = require("../models/sellModle");

const sellProduct = asyncHandler(async (req, res) => {
  const { user, medicines, totalPrice, customer } = req.body;
  //console.log("userId", user);

  try {
    for (const medicine of medicines) {
      const stock = await Stock.findOne({
        medicine: medicine.medicine,
        user: user,
      });
      stock.quantity -= medicine.quantity;
      await stock.save()
    }

    const newRequest = new Sell({
      user,
      medicines,
      totalPrice,customer
    });

    const saveRequest = await newRequest.save();
      res.status(201).json(saveRequest);
  } catch (error) {}
});

module.exports = { sellProduct };
