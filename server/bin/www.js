import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();

// import network service modules
import * as services from "../services/index.js";

// import express application / requestHandler
import { app } from "../app.js";

// destructuring assignments of all required services
const { mongoConnect, shutdown, startServer } = services;

// create a connection to the database
const [databaseConnection, dbMessage] = await mongoConnect();

// shutdown the process if the database connection fails
if (!databaseConnection) shutdown(dbMessage);
// start the server if the database connection succeeds
else startServer(app);
