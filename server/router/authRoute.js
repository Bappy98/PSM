const express = require("express");
const {
  login,
  branchRegistration,
  getAllUsers,
  userById,
  deleteUser,
} = require("../controllers/userController");
const { protect, isSuperAdmin } = require("../middleware/auth");
const router = express.Router();

router.route("/login").post(login);
router.route("/branch/register").post(branchRegistration);

router.route("/users").get(protect,isSuperAdmin,getAllUsers);
router.route("/user/:id").get(userById).delete(protect,isSuperAdmin,deleteUser);

module.exports = router;
