import { createRouterSchema, createRouter } from "../../utils/ExpressHelper.js";
import { addReview, getReviews, removeReview, updateReview } from "./review.controller.js";
import { isValidReview } from "./review.util.js";
import { isLoggedin } from "../../middleware/isLoggedin.js";

const routerSchema = createRouterSchema({
  all: ["get", "/:userID", isLoggedin, getReviews],
  add: ["post", "/:userID/new", isLoggedin, isValidReview, addReview],
  update: ["patch", "/:id", isLoggedin, updateReview],
  delete: ["delete", "/:id", isLoggedin, removeReview]
});
const reviewRouter = createRouter(routerSchema);

export { reviewRouter };
