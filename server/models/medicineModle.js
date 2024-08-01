const { default: mongoose, Schema } = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    weight:{
        type:String,
        //required:true
    },
    singleBoxPrice:{
        type:Number
    }
    ,
    unitPrice:{
        type:Number,
        required:true
    },
    dosages:{
        type:String,
       // required:true
    },
    generics:{
        type:String,
        //required:true 
    },
    company:{
        type:Schema.Types.ObjectId,
        ref:'Company' 
    },
    description:{
        type:String
    },
    type:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Medicine", medicineSchema);