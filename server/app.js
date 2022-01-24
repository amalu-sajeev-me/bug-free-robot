import express from "express";

import middlewares from "./middlewares/index.js";

const app = express();

app.use(middlewares);

app.use((req, res) => {
  res.send("hello from backend server2");
});

export default app;