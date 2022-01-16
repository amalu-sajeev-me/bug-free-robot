const bodyParser = require("body-parser");

const options = {
  url: {
    extended: true,
  },
  json: {},
};

exports.parseURI = bodyParser.urlencoded(options.url);

exports.parseJSON = bodyParser.json(options.json);
