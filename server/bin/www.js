import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();
import { session_ } from "../middleware/express-session.js";
import { Server } from "socket.io";

// let server;

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

startServer(app).then(([server, io])=> {
    io.use((socket, next) => {
        session_(socket.request, socket.request.response || {}, next);
    });
    io.on("connection", socket => {
        console.log("new user connected !");
        const { userID } = socket.request.session;
        console.log(userID);
    });
})
