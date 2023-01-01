
const path = require('path')
const express = require('express')
const shopRoutes = express.Router();
const adminData = require('./admin')


shopRoutes.get('/', (req, res,next) => {
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    res.render('shop')
    console.log(adminData.products)
});

module.exports = shopRoutes;