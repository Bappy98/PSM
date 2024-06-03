const mongoose = require("mongoose");
const dosagesSchema = new mongoose.Schema(
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
    icon: {
      type: String,
      require: true,
      // unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dosages", dosagesSchema);
