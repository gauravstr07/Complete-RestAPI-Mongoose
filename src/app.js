const express = require("express");
require("./db/conn");
const Studnet = require("./models/students");

const app = express();
const port = 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});



app.post("/students", (req, res) => {
  const user = new Studnet(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});



app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
