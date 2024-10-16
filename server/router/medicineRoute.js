const express = require("express");
const { protect, isSuperAdmin } = require("../middleware/auth");
const {
  cerateMedicine,
  getAllMedicine,
  updateMedicine,
  deleteMedicine,
  findById,
} = require("../controllers/medicineController");

const router = express.Router();

router.route("/medicine/create").post(cerateMedicine);
router.route("/medicines").get(getAllMedicine);
router
  .route("/medicine/:id")
  .get(findById)
  .put(protect, isSuperAdmin, updateMedicine)
  .delete(protect, isSuperAdmin, deleteMedicine);


  module.exports = router