'use strict';

const router = require('koa-router')();

router.use('/save', require('./save').routes());
router.use('/metrics', require('./prometheus').routes());

module.exports = router;
