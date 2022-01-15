const express = require("express");
const app = express();

app.use((req, res) => {
  res.send("hello from backend server2");
});


module.exports = app;