import app from "../app.js";
import db from "../models/db.js";

const { PORT } = process.env;

db()
  .then(() => {
    const serverMessage = `server started running at http://localhost:${PORT}`;

    const server = app.listen(PORT, console.log(serverMessage));
  })
  .catch((e) => {
    console.log(e);
    process.exit();
  });
