import { getAllreviews } from "./review.model.js";

async function fetchReviews(request, response) {
  const { username } = request.params;
  getAllreviews({ username }).then((data) => {
    response.send(data);
  });
}
