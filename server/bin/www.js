import { mongoConnect } from "../services/mongo.js";
import { shutdown, startServer } from "../services/server.js";
import { app } from "../app.js";

const [databaseConnection, dbMessage] = await mongoConnect();

if (!databaseConnection) shutdown(dbMessage);
else startServer(app);
