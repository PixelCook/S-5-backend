const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.post("/register", async (req, res) => {
  const user = req.body;
  const registerUser = new User({
    name: user.name,
    email: user.email,
    role: user.role,
  });
  const newUser = await registerUser.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } else {
    res.status(401).send({ message: "Invalid User Data" });
  }
});

module.exports = router;

