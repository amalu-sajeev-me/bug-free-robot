import { Router } from "express";

const reviewRouter = Router();

reviewRouter.route("/:username").get();
reviewRouter.route("/:username/:id").get();
reviewRouter.route("/:username/new").post();

export { reviewRouter };
