const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
const User = require("../models/userModel");
const Stock = require("../models/stockModle");
const OrderMedicine = asyncHandler(async (req, res) => {
  const { userId, medicines, phone, address, total } = req.body;

  // Validate the input
  if (!Array.isArray(medicines) || medicines.length === 0) {
    return res
      .status(400)
      .json({ error: "Invalid medicines format or empty medicines" });
  }

  try {
    medicines.forEach((medicine) => {
      if (!medicine.medicine || !medicine.quantity) {
        throw new Error("Missing required fields in one of the medicines");
      }
    });
    const invoiceNumber = Math.floor(1000 + Math.random() * 9000);

    const newRequest = new Order({
      user: userId,
      medicines,
      invoice: invoiceNumber,
      phone,
      address,
      total,
    });

    await newRequest.save();
    const superadmin = await User.findOne({ userType: "superadmin" });
    if (!superadmin) {
      return res.status(404).json({ error: "Superadmin not found" });
    }

    // Update stock for each medicine in the superadmin's stock
    for (const medicine of medicines) {
      let adminStock = await Stock.findOne({
        user: superadmin._id,
        medicine: medicine.medicine, // Assuming medicine.medicine is the medicine ID
      });

      if (!adminStock) {
        throw new Error(`Stock for medicine ID ${medicine.medicine} not found`);
      }

      if (adminStock.quantity < medicine.quantity) {
        throw new Error(
          `Insufficient stock for medicine ID ${medicine.medicine}`
        );
      }
      adminStock.quantity -= medicine.quantity;
      await adminStock.save();
    }

    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message || "Server error" });
  }
});

const orderStatus = asyncHandler(
  asyncHandler(async (req, res) => {
    const {id} = req.params
    const { status, userId } = req.body;
    try {
      const request = await Order.findById(id);
      if (!request) {
        return res.status(404).json({ error: "Medicine request not found" });
      }
      if (status === "accepted") {
        request.status = "accepted";
        await request.save();
        return res.status(202).json({
          message: "Order accepted",
        });
      } else if (status === "rejected") {
        request.status = "rejected";
        await request.save();
        for (const medicine of request.medicines) {
          // let stock = await Stock.findOne({
          //   user: request.user._id,
          //   medicine: medicine.medicine._id,
          // });
          let adminStock = await Stock.findOne({
            user: userId,
            medicine: medicine.medicine._id,
          });

          // if (!stock) {
          //   stock = new Stock({
          //     user: request.user._id,
          //     medicine: medicine.medicine._id,
          //     quantity: 0,
          //   });
          // }
          adminStock.quantity += medicine.quantity;
          //stock.quantity += medicine.quantity;
          await adminStock.save();
          return res.status(204).json({
            message: "Order rejected",
          });
          //await stock.save();
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message || "Server error" });
    }
  })
);
const getAllOrder = asyncHandler(async (req, res) => {
  try {
    const data = await Order.find({}).populate("user");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message || "Server error" });
  }
});

const getOrderById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const request = await Order.findById(id)
      .populate("user")
      .populate({
        path: "medicines.medicine",
        populate: {
          path: "company",
          model: "Company",
        },
      });
    if (!request) {
      return res.status(404).json({ error: "Medicine request not found" });
    }
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message || "Server error" });
  }
});

const getMyOrder = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const order = await Order.find({ user: userId }).populate({
      path: 'medicines.medicine', 
      populate: {
        path: 'company', 
        model: 'Company',
      },
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = { OrderMedicine, orderStatus, getOrderById, getAllOrder,getMyOrder };
