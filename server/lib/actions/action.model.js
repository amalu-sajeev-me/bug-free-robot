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

  static async createActivity(userID, name, description) {
    const user = User.findById(userID);
    const activity = new Action({
      actionType: name,
      timeStamp: new Date().toLocaleString(),
      description,
    });
    await user.actions.push(activity);
    await user.save();
    await activity.save();
  }
}
