const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: {
    type: String,
    required: true,
  },
  userId: { type: String, required: true },
});

const postModel = mongoose.model("Post", userSchema);

module.exports = postModel;
