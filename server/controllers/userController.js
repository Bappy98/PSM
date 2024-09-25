const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");
const generateToken = require("../utils/generateToken");
const jwt = require('jsonwebtoken')

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      message: "Login success",
      _id: user._id,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(202).send(new Error("invalid user name or password"));
  }
});

const branchRegistration = asyncHandler(async (req, res) => {
  const { email, name, password, userType } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(202).send(new Error("user already exist"));
  }
  const user = new User({
    email,
    name,
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

const userById = asyncHandler(async(req,res)=>{
 
    const user =await User.findById(req.params.id)
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  
})

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const allUsers = await User.find({ userType: 'branch' });
    res.json({
      message: "successfully registration",
      data: allUsers,
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete single user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = {
  login,
  branchRegistration,
  getAllUsers,
  userById,
  deleteUser
};
