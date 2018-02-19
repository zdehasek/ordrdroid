'use strict';

const express = require('express')
const router = express.Router();
const prometheus = require('./models/prometheus');


router.get('/order', function (req, res) {
    const exampleData = {fullName: 'Zdeněk Hásek', bussinessId: '123456789'}
    res.send(exampleData)
})

router.put('/order', function (req, res) {
    console.log(req);
})

router.get('/metrics', async (ctx) => {
    const metrics = prometheus.register.metrics();
    ctx.body = metrics;
});

module.exports = router;