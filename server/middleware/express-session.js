import session from "express-session";
import MongoDBStore from "connect-mongodb-session";

const { DB_STRING, SESSION_SECRET } = process.env;

const MongoSessionStore = MongoDBStore(session);

const store = new MongoSessionStore({
  uri: DB_STRING,
});

store.on("error", (e) => {
  console.error(`an error has occured in session Store \n${e}`);
});

// const sessionOptions = ;

const session_ = session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store,
  name: "userID",
  unset: "destroy",
  cookie: {
    httpOnly: true,
    path: "/",
    signed: true,
    // secure: true,
    // sameSite: "none",
  },
});

export { session_ };
