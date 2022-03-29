import Koa from "koa";
import serve from 'koa-static';
import router from "./routers/records.router.mjs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = new Koa();
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = { message: err.message };
    }
})
app.use(serve(__dirname + '/public'));
app.use(router.routes()).use(router.allowedMethods());

export default app;