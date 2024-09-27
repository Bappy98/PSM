const { request } = require("http");
const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    //required: true
  },
  medicines: [
    {
      medicine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Medicine",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  customer: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Sell = mongoose.model("Sell", sellSchema);

module.exports = Sell;
