import bodyParser from "body-parser";

const options = {
  url: {
    extended: true,
  },
  json: {},
};

const parseURI = bodyParser.urlencoded(options.url);

const parseJSON = bodyParser.json(options.json);

export { parseURI, parseJSON };
