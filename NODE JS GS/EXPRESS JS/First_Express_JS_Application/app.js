// First Express JS Application
const express = require("express");
const app = express();
const port = process.env.PORT || "3000";

app.get("/", function (req, res) {
  res.send("hello world\nHow are you");
});

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
