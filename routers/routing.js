//const MemberController = require("../controllers/MemberController");

module.exports = (app) => {
  var router = require("express").Router();
  app.use("/api", router);

  // member sign up
  router.post("/member/register", MemberController.create);

  //  member log in
  router.post("/member/login", MemberController.find);
};
