const express = require("express");
const {
  login,
  branchRegistration,
  getAllUsers,
  userById,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/login").post(login);
router.route("/branch/register").post(branchRegistration);

router.route("/users").get(getAllUsers);
router.route("/user/:id").get(userById).delete(deleteUser);

module.exports = router;
