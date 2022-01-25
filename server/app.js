import express from "express";

import { memberRouter } from "./lib/member/member.router.js";
import middlewares from "./middleware/index.js";
import { handleError } from "./utils/errorHandler.js";

const app = express();

app.use(middlewares);

app.use("/api/member", memberRouter);

app.get("/", (req, res) => {
  throw new Error("error testing");
  res.send("hello world");
});

app.use(handleError);
export default app;