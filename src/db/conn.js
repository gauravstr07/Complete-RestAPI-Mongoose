const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log(`connected to database..💾`);
  })
  .catch((err) => {
    console.log(err);
  });
