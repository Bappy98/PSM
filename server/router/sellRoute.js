const express = require("express");
const { protect } = require("../middleware/auth");
const { sellProduct } = require("../controllers/sellController");

const router = express.Router();

router.route("/product-sell").post(protect, sellProduct);

module.exports = router;
