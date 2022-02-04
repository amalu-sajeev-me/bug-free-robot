import { helmet_ } from "./helmet.js";
import { methodOverride_ } from "./method-override.js";
import { cors_ } from "./cors.js";
import { parseURI, parseJSON } from "./body-parser.js";
import { session_ } from "./express-session.js";
import { _serveStatic } from "./serve-static.js";
import logger from "./morgan.js";
import { actuator_ } from "./actuator.js";
export default [
  // helmet_,
  methodOverride_,
  cors_,
  parseURI,
  parseJSON,
  session_,
  _serveStatic,
  logger,
  actuator_,
];
