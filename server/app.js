import express from "express";

import { memberRouter } from "./lib/member/member.router.js";
import { messageRouter } from "./lib/message/message.router.js";
import middlewares from "./middleware/index.js";
import { serveSwagger, setupSwagger } from "./middleware/swagger.js";
import { handleError } from "./utils/errorHandler.js";




const app = express();

app.use(middlewares);

app.use("/api-docs", serveSwagger, setupSwagger);

app.use("/api/members", memberRouter);

app.use("/api/messages", messageRouter);


app.get("/", (req, res) => {
  // throw new Error("error testing");
  res.send("hello world");
});

app.use(handleError);
export { app };
