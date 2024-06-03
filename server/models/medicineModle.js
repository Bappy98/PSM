const { default: mongoose, Schema } = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    weight:{
        type:String,
        required:true
    },
    unitPrice:{
        type:Number,
        required:true
    },
    dosages:{
        type:Schema.Types.ObjectId,
        ref:'Dosages'
    },
    generics:{
        type:Schema.Types.ObjectId,
        ref:'Generics' 
    },
    company:{
        type:Schema.Types.ObjectId,
        ref:'Company' 
    }
})

module.exports = mongoose.model("Medicine", medicineSchema);