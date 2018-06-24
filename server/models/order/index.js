'use strict';

const orderStorage = require('./orderStorage');


const orderService = {

    async init () {
        await orderStorage.init();
    },
    
    /**
     * @param {string} search
     * @returns {Promise}
     */
    getOrderSettingsByGoogleSignIn (googleSignIn) {
        
        return supplierStorage.findSuppliersBySearch(search);
    }

};

module.exports = suppliersService;
