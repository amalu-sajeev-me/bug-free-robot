const cors = require("./cors");
const { parseURI, parseJSON } = require("./body-parser");
const { session } = require("./express-session");
const middlewares = [cors, parseURI, parseJSON, session];

exports = middlewares;
