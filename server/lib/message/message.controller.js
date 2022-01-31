import { scream, say } from "../../utils/index.js";
import { Message } from "../message/message.mongo.js";

async function addMessage(request, response) {
  const message = request.body;
  const result = await Message.create({
    fromUser: request.body.fromUser,
    toUser: request.body.toUser,
    message: request.body.message,
  });
  const successMsg = [true, null, result];
  const failureMsg = [500, `couldn't create the message`];
  result ? response.json(say(...successMsg)) : scream(...failureMsg);
}

async function fetchMessages(request, response) {
  const result = await Message.find({});
  const successMsg = [true, null, result];
  const failureMsg = [401, `couldn't fetch the messages`];
  result ? response.json(say(...successMsg)) : scream(...failureMsg);
}

async function fetchMessagesFromUser(request, response) {
  const fromUser = request.body.fromUser;
  const result = await Message.findOne({ fromUser: fromUser });
  const successMsg = [true, null, result];
  const failureMsg = [401, `couldn't fetch the messages from given user`];
  result ? response.json(say(...successMsg)) : scream(...failureMsg);
}

async function fetchMessagesToUser(request, response) {
  const toUser = request.body.toUser;
  const result = await Message.findOne({ toUser: toUser });
  const successMsg = [true, null, result];
  const failureMsg = [401, `couldn't fetch the messages to given user`];
  result ? response.json(say(...successMsg)) : scream(...failureMsg);
}

async function deleteMessage(request, response) {
  const result = await Message.deleteOne({ id: request.params.id });
  const successMsg = [true, null, result];
  const failureMsg = [500, `couldn't delete the message`];
  result ? response.json(say(...successMsg)) : scream(...failureMsg);
}

export {
  addMessage,
  fetchMessages,
  fetchMessagesFromUser,
  fetchMessagesToUser,
  deleteMessage,
};
