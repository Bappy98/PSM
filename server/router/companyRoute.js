const express = require("express");
const {
  getAllCompany,
  updateCompany,
  findById,
  deleteCompany,
  createCompany,
} = require("../controllers/companyControllers");
const { protect, isSuperAdmin } = require("../middleware/auth");
const router = express.Router();

router.route("/company/create").post(protect,isSuperAdmin,createCompany);
router.route("/company").get(getAllCompany);
router
  .route("/company/:id")
  .put(protect,isSuperAdmin,updateCompany)
  .get(findById)
  .delete(protect,isSuperAdmin,deleteCompany);
module.exports = router;
