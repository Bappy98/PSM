const asyncHandler = require("express-async-handler");
const MedicineRequest = require("../models/medicineReqyestModel");
const Stock = require("../models/stockModle");

const requestMedicine = asyncHandler(async (req, res) => {
  const { userId, medicines } = req.body;

  // Validate the input
  if (!Array.isArray(medicines) || medicines.length === 0) {
    return res
      .status(400)
      .json({ error: "Invalid medicines format or empty medicines" });
  }

  try {
    // Check if all medicine requests have the necessary fields
    medicines.forEach((medicine) => {
      if (!medicine.medicine || !medicine.quantity) {
        throw new Error("Missing required fields in one of the medicines");
      }
    });
    const invoiceNumber = Math.floor(1000 + Math.random() * 9000);

    // Create the request payload
    const newRequest = new MedicineRequest({
      user: userId,
      medicines,
    
    });

    const saveRequest = await newRequest.save();

    

    res.status(201).json(saveRequest);
  } catch (error) {
    res.status(500).json({ error: error.message || "Server error" });
  }
});

const acceptMedicineRequest = asyncHandler(async (req, res) => {
  const { requestId, status, userId } = req.body;
  try {
    const request = await MedicineRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ error: "Medicine request not found" });
    }
  

    if (status === "accepted") {
      request.status = "accepted";
      await request.save();
      
      for (const medicine of request.medicines) {
     
        let stock = await Stock.findOne({
          user: request.user._id,
          medicine: medicine.medicine._id,
        });
        let adminStock = await Stock.findOne({
          user: userId,
          medicine: medicine.medicine._id,
        });

        if (!stock) {
          stock = new Stock({
            user: request.user._id,
            medicine: medicine.medicine._id,
            quantity: 0,
          });
        }
        adminStock.quantity -= medicine.quantity;
        stock.quantity += medicine.quantity;
        await adminStock.save();
        await stock.save();
      }

      res
        .status(200)
        .json({ message: "Request accepted and stock updated", request });
    } else if (status === "rejected") {
      request.status = "rejected";
      await request.save();
      res.status(204).json({ message: "Request rejected" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Server error" });
  }
});

const getAllRequest = asyncHandler(async (req,res)=>{
    try {
        const data = await MedicineRequest.find({}).populate('user')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error.message || "Server error" });
    }
})

const getRequestById = asyncHandler(async (req, res) => {
  const { id } = req.params; 

  try {
    const request = await MedicineRequest.findById(id).populate('user').populate({
      path: 'medicines.medicine', 
      populate: {
        path: 'company', 
        model: 'Company',
      },
    });
    if (!request) {
      return res.status(404).json({ error: 'Medicine request not found' });
    }
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Server error' });
  }
});


module.exports = { requestMedicine, acceptMedicineRequest,getAllRequest,getRequestById };
