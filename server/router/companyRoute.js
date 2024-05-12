const express = require("express");
const {
  getAllCompany,
  updateCompany,
  findById,
  deleteCompany,
  createCompany,
} = require("../controllers/companyControllers");
const router = express.Router();

router.route("/company/create").post(createCompany);
router.route("/company").get(getAllCompany);
router
  .route("/company/:id")
  .put(updateCompany)
  .get(findById)
  .delete(deleteCompany);
module.exports = router;
