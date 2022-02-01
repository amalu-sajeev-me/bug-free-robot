import { Router } from "express";

class ExpressHelper {
    static catchAsync(fn) {
        if (fn.constructor.name !== "AsyncFunction") return fn;
        else return function (request, response, next) {
            return fn(request, response, next).catch(next);
        }
    }

    static createRouterSchema(obj) {
        return [...Object.values(obj)];
    }

    static createRouter(schema) {
        if (!schema instanceof Array) throw "invalid schema";
        const router = Router();
        schema.forEach(item => {
            const [method, path, ...restParams] = item;
            const wrapAsyncParams = restParams.map(param => {
                return ExpressHelper.catchAsync(param);
            });
            router.route(path)[method](...wrapAsyncParams);
        });
        return router;
    }
}


const { createRouterSchema, createRouter } = ExpressHelper;
export { createRouterSchema, createRouter };