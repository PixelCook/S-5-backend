require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const mongodbUrl = process.env.MONDGODB_URL;
const userRoute = require("./routes/userRoute");
const cors = require("cors");
// const postRoute = require("./routes/postRoute");
const sampleUsers = require("./sample.json");
const samplePosts = require("./sampleposts.json")

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoDB has connected"))
  .catch((error) => console.log(error.reason));

const app = express();
const port = 5000;
app.use(cors());

app.get("/api/users", (req, res) => {
  const users = sampleUsers;
  res.send(users);
});

app.get("/api/posts", (req, res) => {
  const posts = samplePosts;
  res.send(posts);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
