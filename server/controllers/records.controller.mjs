import recordsService from "../services/records.service.mjs";

/**
 * @typedef {import("koa-router").IRouterParamContext<any, {}>} IRouterParamContext
 * @typedef {import("koa").ParameterizedContext<any, IRouterParamContext, any>} ParameterizedContext
 */

/**
 * @param {ParameterizedContext} ctx 
 */
async function getRecords(ctx) {
    const values = await recordsService.getRecords();
    ctx.body = values;
}

/**
 * @param {ParameterizedContext} ctx 
 */
async function addRecords(ctx) {
    const { file } = ctx.request.files;
    if (!file || file.type !== 'text/csv') ctx.throw("Wrong type of file!", 400);
    const values = await recordsService.addRecords(file.path);
    ctx.status = 201;
    ctx.body = values;
}

/**
 * @param {ParameterizedContext} ctx 
 */
async function removeRecords(ctx) {
    await recordsService.removeRecords();
    ctx.status = 204;
}

export default {
    getRecords,
    addRecords,
    removeRecords
}