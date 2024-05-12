const mongoose = require("mongoose");
const genericsSchema = new mongoose.Schema(
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
    details: {
      type: String,
      require: true,
      // unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Generics", genericsSchema);
