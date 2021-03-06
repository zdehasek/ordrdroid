'use strict';

const config = require('config')
const db  = require('./models/db');
const log = require('winston')
const order = require('./models/order')

module.exports = async function () {

    try {
        /** Database connection establishing **/
        await db.connect(config.db.url, config.db.options)
        await order.init()

    } catch (e) {

        log.error('Application crashed during start-up process.', e);

        setTimeout(() => process.exit(1), 10); // terminate app when models could not be initialized properly
    }
};
