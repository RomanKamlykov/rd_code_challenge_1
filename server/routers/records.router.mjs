import Router from "koa-router";
import bodyparser from "koa-body";
import recordsController from "../controllers/records.controller.mjs"

const router = new Router({ prefix: '/api/records' });

router
    .get("/", recordsController.getRecords)
    .post("/", bodyparser({ multipart: true }), recordsController.addRecords)
    .delete("/", recordsController.removeRecords);


export default router;