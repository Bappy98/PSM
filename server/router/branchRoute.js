const express = require("express");
const {
  createBranch,
  getAllBranch,
  updateBranch,
  deleteBranch,
  findById,
} = require("../controllers/branchController");
//const { findById } = require("../models/branchModle");
const router = express.Router();

router.route("/branch/create").post(createBranch);

router.route("/branch").get(getAllBranch);
router
  .route("/branch/:id")
  .put(updateBranch)
  .get(findById)
  .delete(deleteBranch);
module.exports = router;
