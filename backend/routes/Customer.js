const express = require('express');
const router = express.Router();

const customerControler = require('../controller/customer');

router.get('/customer/get', customerControler.getCustomer);

module.exports = router;