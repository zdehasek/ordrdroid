'use strict'

const config = require('config')
const express = require('express')
const app = express()

//app.listen(3000, () => console.log('Example app listening on port 3000!'))


/////
//const errorHandler = require('./errorHandler');
//const controllers = require('./controllers');


/** error handler **/
//app.use(errorHandler.getErrorHandler());

/** Web **/
app.use(express.static('public'))


/** routes **/
//app.use(controllers.routes());


/** initialize modules **/
require('./bootstrap')()
    .then(() => {
        app.listen(config.port, () => {
            process.stdout.write(`App runs on port ${config.port}.\n\n`);
        });
    });

module.exports = app;
