'use strict';

const router = require('koa-router')();

router.post('*', async (ctx) => {
    console.log(ctx.request.body);
    ctx.body = 'saving data....';

});
module.exports = router;
