import express from "express";

import { memberRouter } from "./routes/index.js";
import middlewares from "./middleware/index.js";

const app = express();

app.use(middlewares);

app.use("/api/member", memberRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
export default app;