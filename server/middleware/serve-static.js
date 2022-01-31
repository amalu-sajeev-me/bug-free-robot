import serveStatic from "serve-static";
import { resolve } from "path";
console.log(resolve())
const staticDir = `${resolve()}/server/bin/public`;
const _serveStatic = serveStatic(staticDir);

export { _serveStatic };
