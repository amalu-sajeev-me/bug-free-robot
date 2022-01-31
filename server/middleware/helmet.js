import helmet from "helmet";

const helmetOptions = {
    contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "example.com"],
          "style-src": null,
        },
      }
  };
// 
const helmet_ = helmet(helmetOptions);

export { helmet_ };
