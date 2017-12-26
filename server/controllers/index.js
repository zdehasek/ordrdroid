'use strict';

const { Router } = require('express');

const router = new Router();

router.use('/order', require('./order'));

//router.use('/prometheus', require('./prometheus'));

module.exports = router;