'use strict';

const db = require('../db');

const supplierStorage = {

    _collection: null,

    async init () {

        this._collection = db.db.collection('suppliers');

        await this._collection.createIndex({ _lcFn: 1 });
    },

    /**
     * @param {string} search
     * @returns {Promise}
     */
    findSuppliersBySearch (search) {

        const query = {};

        return this._collection.find(query)
            .limit(10)
            .toArray()
            .then(documents => ({
                page: null,
                nextPage: null,
                data: documents.map(document => this._formatDocument(document))
            }));
    },

    _formatDocument (document) {

        document.supplierId = document._id.toString();
        delete document._id;
        delete document._lcFn;

        return document;
    }
};

module.exports = supplierStorage;
