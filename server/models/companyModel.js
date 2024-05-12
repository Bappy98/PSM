const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      //required: true,
      // unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      require: true,
      // unique: true,
    },
    phone: {
      type: String,
      require: true,
      unique: true,
    },
    logo: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
