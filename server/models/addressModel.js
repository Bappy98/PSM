const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    houseNo:{
        type:String,
        required:true
    },
    roadNo:{
        type:String,
        required:true
    },
    region:{
        type:String,
        required:true
    },
    policeStation:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("Address",addressSchema)