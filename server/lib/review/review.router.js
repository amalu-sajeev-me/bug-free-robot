import { createRouterSchema, createRouter } from "../../utils/ExpressHelper.js";
import { addReview, getReviews, removeReview, updateReview } from "./review.controller.js";
import { isValidReview } from "./review.util.js";

const routerSchema = createRouterSchema({
  all: ["get", "/:userID", getReviews],
  add: ["post", "/:userID/new", isValidReview, addReview],
  update: ["patch", "/:id", updateReview],
  delete: ["delete", "/:id", removeReview]
});
const reviewRouter = createRouter(routerSchema);

export { reviewRouter };
