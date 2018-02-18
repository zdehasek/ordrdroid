'use strict';

const express = require('express')
const router = express.Router();

router.get('/', function (req, res) {
    const exampleData = {fullName: 'Zdeněk Hásek', bussinessId: '123456789'}
    res.send(exampleData)
})

module.exports = router