const { default: mongoose, Schema } = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  dosages: {
    type: String,
  },
  generic: {
    type: String,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Medicine", medicineSchema);
