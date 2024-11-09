const asyncHandler = require("express-async-handler");

const stripe = require("stripe")(process.env.SECRET_KEY)

const payment = asyncHandler(async (req,res)=>{
    const {amount} = req.body

    try {
        const paymentIntent = await stripe.paymentIntent.create({
            amount: amount*100
        })

        res.status(200).json({
            clientSecret : paymentIntent
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports ={payment}