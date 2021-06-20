const express = require("express");
const Post = require("../models/postModel");

const router = express.Router();

router.get("/posts", async (req, res) => {
  const users = await Post.find({});
  res.send(users);
});

router.post("/post", async (req, res) => {
  const post = req.body;
  const registerPost = new Post({
    title: post.title,
    body: post.body,
    userId:  post.userId,
  });
  const newPost = await registerPost.save();
  if (newPost) {
    res.send({
      _id: newPost.id,
      title: newPost.title,
      body: newPost.body,
      userId: newPost.userId,
    });
  } else {
    res.status(401).send({ message: "Invalid User Data" });
  }
});

module.exports = router;

