import { Action } from "./action.mongo.js";
import { User } from "../member/member.mongo.js";
export default class ActionExtension {
  static activity(type = "unkown", description = "unknown") {
    const action = new Action({
      actionType: type,
      timeStamp: new Date().toLocaleString(),
      description: description,
    });
    return action;
  }
}
