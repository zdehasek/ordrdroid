'use strict'

const config = require('config')
const express = require('express')
const controller = require('./controller')
const bodyParser = require('body-parser')
const app = express()

//const errorHandler = require('./errorHandler');

/** error handler **/
//app.use(errorHandler.getErrorHandler());

/** Web **/
app.use(express.static('public'))

/** routes **/
app.use(bodyParser.json())
app.use('/api', controller)

/** initialize modules **/
require('./bootstrap')()
    .then(() => {
        app.listen(config.port, () => {
            process.stdout.write(`App runs on port ${config.port}.\n\n`)
        });
    });

module.exports = app
