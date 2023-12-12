const express = require('express');
const router = express.Router();

const orderControler = require('../controller/order');

router.get('/order/get', orderControler.getOrder);

module.exports = router;