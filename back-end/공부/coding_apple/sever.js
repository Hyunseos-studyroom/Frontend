const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("lisnesing on port 8080");
});

app.get("/pet", function (req, res) {
  res.send("펫용품을 쇼핑할수 있는 사이트 일것입니다(?)");
});

app.get("/beuty", function (req, res) {
  res.send("뷰티용품을 쇼핑할수 있는 사이트 일것입니다(?)");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
