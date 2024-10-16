const express = require("express");
const {
  OrderMedicine,
  getAllOrder,
  getMyOrder,
  orderStatus,
  getOrderById,
} = require("../controllers/orderController");
const { protect, isSuperAdmin } = require("../middleware/auth");

const router = express.Router();

router.route("/order").post(protect, OrderMedicine);
router.route("/all-order").get(protect, getAllOrder);
router.route("/my-order/:userId").get(protect, getMyOrder);
router.route("/accepted-order/:id").post(protect, isSuperAdmin, orderStatus);
router.route("/order/:id").get(getOrderById);
module.exports = router;
