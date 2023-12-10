const express = require('express');
const router = express.Router();

const warehouseControler = require('../controller/warehouse');

router.get('/warehouse/get',warehouseControler.getWarehouses);
 
module.exports = router;