import session from "express-session";

const options = {
  secret: "not-a-secret-now",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
};

const session_ = session(options);

export { session_ };
