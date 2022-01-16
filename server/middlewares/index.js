const { cors } = require("./cors");
const { parseURI, parseJSON } = require("./body-parser");
const { session } = require("./express-session");

exports.middlewares = [cors, parseURI, parseJSON, session];
