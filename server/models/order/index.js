'use strict';

const orderStorage = require('./orderStorage')

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
    },

    manageOrder (dbModel, body) {

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
        
        
        db.collection('test').findAndModify({hello: 'world'}, // query
  [['_id','asc']],  // sort order
  function(err, object) {
      if (err){
          console.warn(err.message);  // returns error if no matching object found
      }else{
          console.dir(object);
      }
  });
});



};

module.exports = orderService;
