const express = require("express");
const {
  createDosages,
  getAllDosages,
  findById,
  updateDosages,
  deleteDosages,
} = require("../controllers/dosageController");

const router = express.Router();

router.route("/dosages/create").post(createDosages);
router.route("/dosages").get(getAllDosages);
router
  .route("/dosages/:id")
  .get(findById)
  .put(updateDosages)
  .delete(deleteDosages);

  module.exports = router