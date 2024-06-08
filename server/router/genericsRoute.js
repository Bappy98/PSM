const express = require("express");
const {
  getAllGenerics,
  updateGenerics,
  findById,
  deleteGenerics,
  createGenerics,
} = require("../controllers/genericsControllers");
const { isSuperAdmin, protect } = require("../middleware/auth");
const router = express.Router();

router.route("/generics/create").post(protect,isSuperAdmin,createGenerics);
router.route("/generics").get(getAllGenerics);
router
  .route("/generics/:id")
  .put(protect,isSuperAdmin,updateGenerics)
  .get(findById)
  .delete(protect,isSuperAdmin,deleteGenerics);
module.exports = router;
