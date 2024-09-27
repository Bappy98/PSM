const asyncHandler = require("express-async-handler");
const Sell = require("../models/sellModle");

const sellProduct = asyncHandler(async(req,res)=>{
    const { userId, medicines,totalPrice,customer } = req.body;

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
    
        
        const newRequest = new Sell({
          user: userId,
          medicines,
          totalPrice,customer
        });

        const saveRequest = await newRequest.save();
    
    
        res.status(201).json(saveRequest);
      } catch (error) {
        res.status(500).json({ error: error.message || "Server error" });
      }
})

module.exports = {sellProduct}