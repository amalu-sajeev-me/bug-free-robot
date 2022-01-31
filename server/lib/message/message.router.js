import {
  fetchMessages,
  fetchMessagesFromUser,
  fetchMessagesToUser,
  deleteMessage,
  addMessage,
} from "./message.controller.js";
import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";

const messageRouter = Router();

messageRouter.route("/addMessage").post(catchAsync(addMessage));

messageRouter.route("/all").get(catchAsync(fetchMessages));

messageRouter.route("/fromUser").post(catchAsync(fetchMessagesFromUser));

messageRouter.route("/toUser").post(catchAsync(fetchMessagesToUser));

messageRouter.route("/delete/:id").delete(catchAsync(deleteMessage));

export { messageRouter };
