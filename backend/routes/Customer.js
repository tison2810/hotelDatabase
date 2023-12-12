const express = require('express');
const router = express.Router();

const customerControler = require('../controller/customer');

router.get('/customer/get', customerControler.getCustomer);

router.post('/customer/post', customerControler.addCustomer);

router.post('/customer/delete', customerControler.deleteCustomer);

router.get('/customer/filter', customerControler.findCustomerbyId);

module.exports = router;