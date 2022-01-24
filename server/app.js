import express from "express";

import { member } from "./routers/member.js";
import middlewares from "./middlewares/index.js";

const app = express();

app.use(middlewares);

app.use("/api", member);

app.get("/", (req, res) => {
  res.send("hello world");
});
export default app;