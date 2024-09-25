const asyncHandler = require("express-async-handler");
const Stock = require("../models/stockModle");
//const { convertToPieces } = require("../utils/medicineCounter");

const getStock = asyncHandler(async(req,res)=>{
    try {
        const {userId} = req.params;
        const stock = await Stock.find({user:userId}) .populate({
            path: 'medicine',
            populate: {
                path: 'company', // Nested populate to get the company details
            },
        });

        if(!stock) {
            return res.status(404).json({ error: 'Stock not found' });
        }
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
})

const addStock = asyncHandler(async (req, res) => {
    const {userId,id} = req.params
    const {  quantity } = req.body;

    try {
        // Find the existing stock for the user and medicine
        let stock = await Stock.findOne({ user: userId, medicine: id });

        if (stock) {
            // If stock exists, update the quantity
            stock.quantity += quantity;  // or use convertToPieces if required
            await stock.save();
        } else {
            return res.status(404).json({message:'stock not found'})
        }

        res.status(201).json(stock);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = {getStock,addStock}