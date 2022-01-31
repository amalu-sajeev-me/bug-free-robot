import mongoose from "mongoose";

const { Schema, model } = mongoose;

const messageSchema = new Schema({
  fromUser: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 16,
  },
  toUser: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 16,
  },
  message: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
});

const Message = model("Message", messageSchema);

export { Message };
