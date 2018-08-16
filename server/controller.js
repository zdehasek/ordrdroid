'use strict';

const express = require('express')
const router = express.Router()
const orderService = require('./models/order')
const OrderDbModel = require('./models/order/orderDbModel')

//const order = require('./models/order');

// API
// TODO: predelat api url


router.get('/order', function (req, res) {
    //const exampleData = {fullName: 'Zdeněk Hásek', bussinessId: '123456789'}
    const exampleData = {}
    
    res.send(exampleData)
    console.log(exampleData)
  
})

router.put('/order', function (req, res) {

    orderService.manageOrder(OrderDbModel, req.body);
    res.sendStatus(200)
})

/*

// AUTH

router.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        res.cookie('token', '')
        res.json({
            status: 'session cookie not set'
        });
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

router.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

route.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        console.log(req.user.token);
        req.session.token = req.user.token;
        res.redirect('/');
    }
);

*/

module.exports = router;

/*

const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const auth = require('./models/auth');


auth(passport);
app.use(passport.initialize());

app.use(cookieSession({
    name: 'session',
    keys: ['SECRECT KEY'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(cookieParser());
*/