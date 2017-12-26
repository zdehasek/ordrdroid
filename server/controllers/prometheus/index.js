'use strict';
const { Router } = require('express');
const router = new Router();
const prometheus = require('../../models/prometheus');

router.get('/', async (ctx) => {
    const metrics = prometheus.register.metrics();
    ctx.body = metrics;
});

module.exports = router;
