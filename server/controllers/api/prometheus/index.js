'use strict';

const router = require('koa-router')();
const prometheus = require('../../../models/prometheus');

router.get('/', async (ctx) => {
    const metrics = prometheus.register.metrics();
    ctx.body = metrics;
});

module.exports = router;
