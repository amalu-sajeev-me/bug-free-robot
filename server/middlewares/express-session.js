const session = require("express-session");

const options = {
  secret: "not-a-secret-now",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
};

exports.session = session(options);
