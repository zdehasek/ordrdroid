'use strict';

const db = require('../db');
const filter = require('../utils/filter');
const supplierFixtures = require('./supplierFixtures');
const config = require('../../config');
const fixtures = require('../utils/fixtures');


const supplierStorage = {

    _collection: null,

    async init () {

        this._collection = db.db.collection('suppliers');

        await this._collection.createIndex({ _lcFn: 1 });

        if (!config.isProduction()) {
            await this._ensureFixtures();
        }
    },

    /**
     * @param {string} search
     * @returns {Promise}
     */
    findSuppliersBySearch (search) {

        const query = {};

        if (search.length > 0) {
            query.$or = filter.generateQueryOr(search, '_lcFn');
        }

        return this._collection.find(query)
            .limit(10)
            .toArray()
            .then(documents => ({
                page: null,
                nextPage: null,
                data: documents.map(document => this._formatDocument(document))
            }));
    },

    async _ensureFixtures () {
        const records = Object.values(supplierFixtures);
        await fixtures.ensureInCollection(records, this._collection);
    },

    _formatDocument (document) {

        document.supplierId = document._id.toString();
        delete document._id;
        delete document._lcFn;

        return document;
    }
};

module.exports = supplierStorage;
