import app from "../app.js";
import { mongoConnect } from "../services/mongo.js";

const { PORT } = process.env;

mongoConnect()
  .then(() => {
    const serverMessage = `server started running at http://localhost:${PORT}`;

    const server = app.listen(PORT, console.log(serverMessage));
  })
  .catch((e) => {
    console.log(e);
    process.exit();
  });

