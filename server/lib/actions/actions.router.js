import { Router } from "express";

const actionsRouter = Router();

actionsRouter.get("/", (req, res) => {
    scream(404, "cant use here");
    res.send("hello");
})



export { actionsRouter };