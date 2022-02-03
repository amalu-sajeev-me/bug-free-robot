import { Router } from "express";
import { addReview } from "./review.controller.js";


const reviewRouter = Router();

reviewRouter.route("/:userID/new").post(addReview);
reviewRouter.route("/:username/:id").get();
reviewRouter.route("/:username/new").post();

export { reviewRouter };
