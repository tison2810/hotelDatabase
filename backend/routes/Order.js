const express = require('express');
const router = express.Router();

const customerControler = require('../controller/order');

router.get('/order/get', orderControler.getCustomer);