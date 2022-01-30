import request from "supertest";
import { app } from "../../app.js";

describe("Test operations on /api/message Routes", () => {
  test("a demo test", async () => {
    await request(app).get("/").expect(200);
  });
});
