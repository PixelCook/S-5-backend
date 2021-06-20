require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const mongodbUrl = process.env.MONDGODB_URL;

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
