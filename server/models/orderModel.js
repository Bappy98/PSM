const mongoose = require('mongoose');

const orderRequestSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    medicines: [
        {
            medicine: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Medicine',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    address:{
        type:String,
    },
    invoice:{
        type:String,
    },
    phone:{
        type:String,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    total:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('OrderRequest', orderRequestSchema);

 module.exports = Order;
