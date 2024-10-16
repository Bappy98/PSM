const mongoose = require('mongoose');

const medicineRequestSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required: true
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MedicineRequest = mongoose.model('MedicineRequest', medicineRequestSchema);

 module.exports = MedicineRequest;
