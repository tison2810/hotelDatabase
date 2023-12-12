const express = require('express');
const router = express.Router();

const orderControler = require('../controller/order');

router.get('/order/get', orderControler.getOrder);

router.get('/order/sum', orderControler.sumOrder);

module.exports = router;