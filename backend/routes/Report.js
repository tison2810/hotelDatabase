const express = require('express');
const router = express.Router();

const reportControler = require('../controller/report');

router.get('/report/get',reportControler.getReports);
 
module.exports = router;