const express = require("express");
const {
  createDosages,
  getAllDosages,
  findById,
  updateDosages,
  deleteDosages,
} = require("../controllers/dosageController");
const { isSuperAdmin, protect } = require("../middleware/auth");

const router = express.Router();

router.route("/dosages/create").post(protect,isSuperAdmin,createDosages);
router.route("/dosages").get(getAllDosages);
router
  .route("/dosages/:id")
  .get(findById)
  .put(protect,isSuperAdmin,updateDosages)
  .delete(protect,isSuperAdmin,deleteDosages);

  module.exports = router