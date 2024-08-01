const asyncHandler = require("express-async-handler");
const Stock = require("../models/stockModle");

const getStock = asyncHandler(async(req,res)=>{
    try {
        const {userId} = req.params;
        const stock = await Stock.find({user:userId}).populate('medicine')

        if(!stock) {
            return res.status(404).json({ error: 'Stock not found' });
        }
        res.status(200).json({stock});
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
})

