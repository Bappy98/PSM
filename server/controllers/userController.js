const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");
const generateToken = require("./../utils/generateToken");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      message: "Login success",
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(202).send(new Error("invalid user name or password"));
  }
});

const branchRegistration = asyncHandler(async (req, res) => {
  const { email, fName, lName, password, userType } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(202).send(new Error("user already exist"));
  }
  const user = new User({
    email,
    fName,
    lName,
    userType,
    password,
  });
  try {
    const createUser = await user.save();
    res.json({
      message: "successfully registration",
      data: createUser,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  login,
  branchRegistration,
};
