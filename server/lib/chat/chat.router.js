import { Router } from "express";
import { chatBox } from "./chat.controller.js";
const chatRouter = Router();

chatRouter.get("/", chatBox);

export { chatRouter };