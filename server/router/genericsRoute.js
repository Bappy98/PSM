const express = require("express");
const {
  getAllGenerics,
  updateGenerics,
  findById,
  deleteGenerics,
  createGenerics,
} = require("../controllers/genericsControllers");
const router = express.Router();

router.route("/generics/create").post(createGenerics);
router.route("/generics").get(getAllGenerics);
router
  .route("/generics/:id")
  .put(updateGenerics)
  .get(findById)
  .delete(deleteGenerics);
module.exports = router;
