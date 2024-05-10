const express = require("express");
const { login, branchRegistration } = require("../controllers/userController");
const router = express.Router();

router.route("/login").post(login);
router.route("/branch/register").post(branchRegistration);

module.exports = router;
