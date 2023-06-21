const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dog", (req, res) => {
  res.json({ sound: "멍멍" });
});

app.get("/user/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);
  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  }
});

app.get("/user/:id", (req, res) => {
  // const q = req.params;
  // console.log(q.id);
  const q = req.query;
  console.log(q);
  res.json({ user_id: q.id });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
