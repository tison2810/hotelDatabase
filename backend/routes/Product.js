const express = require('express');
const router = express.Router();

const productControler = require('../controller/product');

router.get('/product/get',productControler.getProducts);
 
module.exports = router;