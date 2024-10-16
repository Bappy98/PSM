const express = require("express");
const {
  createBranch,
  getAllBranch,
  updateBranch,
  deleteBranch,
  findById,
} = require("../controllers/branchController");
const { isSuperAdmin, protect } = require("../middleware/auth");
//const { findById } = require("../models/branchModle");
const router = express.Router();

router.route("/branch/create").post(protect, isSuperAdmin, createBranch);

router.route("/branch").get(getAllBranch);
router
  .route("/branch/:id")
  .put(protect, updateBranch)
  .get(findById)
  .delete(protect, isSuperAdmin, deleteBranch);
module.exports = router;
