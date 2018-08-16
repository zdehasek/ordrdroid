'use strict';

const db  = require('../db');
//const orderStorage = require('./orderStorage')
//const mongodb = require('mongodb')

const orderService = {

    _collection: null,


    async init () {

        this._collection = db.db.collection('orders')

        await this._collection.createIndex({ _lcFn: 1 })
    },
    
    /**
     * @param {string} search
     * @returns {Promise}
     */
    getOrderSettingsByGoogleSignIn (googleSignIn) {
        
        return supplierStorage.findSuppliersBySearch(search);
    },

    async manageOrder (dbModel, body) {

        const order = new dbModel()

        order.fullName = body['0']
        order.address = body['1']
        order.bussinessId = body['2']
        order.bankAccount = body['3']
        order.email = body['4']
        order.phoneNumber = body['5']
        order.firstOrderNumber = body['6']
        order.contractNunber = body['7']
        order.contractdDescription = body['8']
        order.orderPrice = body['9']
        order.signature = body['10']

        console.log(order)

        if (!Object.keys(order).length) {
            return;
        }

        try {
            await this._collection.updateOne({ _id: 1 }, { $set: { order } }, { upsert: true });
        } catch (error) {
            console.log(error)
        }
    }

};

module.exports = orderService;
