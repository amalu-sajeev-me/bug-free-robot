import mongoose from "mongoose";

import ActionExtension from "./action.model.js";

const { Schema, model } = mongoose;

const actionSchema = new Schema({
  actionType: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
actionSchema.loadClass(ActionExtension);

const Action = model("Action", actionSchema);

export { Action };
