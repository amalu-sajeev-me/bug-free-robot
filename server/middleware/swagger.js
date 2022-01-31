import fs from "fs";
import swaggerUi from "swagger-ui-express";

const path = `${process.cwd()}/server/middleware/swagger.json`;
const swaggerDocument = JSON.parse(fs.readFileSync(path, "utf8"));

const serveSwagger = swaggerUi.serve;
const setupSwagger = swaggerUi.setup(swaggerDocument);

export { serveSwagger, setupSwagger };
