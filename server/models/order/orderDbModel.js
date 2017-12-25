'use strict';

const OrderDbModel = function () {

    //TODO: je nejak potreba ukladat obrazky podpisů

};

OrderDbModel.prototype = {

    /**
     * id
     */
    _id: null,

    /**
     * @type {string} //TODO: nebo proste nejakej token co odostanu od Googlu z oauthu
     */
    personId: null,

    /**
     * @type {string}
     */
    name: null,

    /**
     * @type {string}
     */
    bussinessId: null,
    
    /**
     * @type {string}
     */
    address: null,
    
    /**
     * @type {string}
     */
    bankAccount: null,
    /**
     * @type {string}
     */
    email: null,

    /**
     * @type {string}
     */
    phoneNumber: null,

    /**
     * @type {number}
     */
    firstOrderNumber: null,

    /**
     * @type {string}
     */
    contractNunber: null,

    /**
     * @type {string}
     */
    contractdDscription: null,

    /**
     * @type {number}
     */
    orderPrice: null,

    /**
     * @type {string}
     */
    signature: null,
    
    /**
     * @type []
     */
    orders: [],

    /**
     * @type {number}
     */
    _version: 1,

    /**
     * @type {Date}
     */
    _lastModifiedAt: null
};

module.exports = MemoryDbModel;
