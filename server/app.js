const express = require("express");

const { middlewares } = require("./middlewares");
const app = express();

app.use(middlewares);

app.use((req, res) => {
  res.send("hello from backend server2");
});

module.exports = app;
