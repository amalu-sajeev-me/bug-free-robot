import request from "supertest";
import { app } from "../../app.js";



describe("Test operations on /api/member Routes", () => {
  test("a demo test now ", async () => {
    await request(app).get("/api-docs").expect(200);
  });
});
