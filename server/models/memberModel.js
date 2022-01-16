// load mongoose since we need it to define a model
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
MemberSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  emailId: String,
  phoneNumber: Number,
  userName: String,
  password: String,
});
module.exports = mongoose.model("Member", MemberSchema);
