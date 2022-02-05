import { Router } from "express";
import { isLoggedin } from "../../middleware/isLoggedin.js";

const actionsRouter = Router();

actionsRouter.get("/", (req, res) => {
    scream(404, "cant use here");
    res.send("hello");
})



export { actionsRouter };