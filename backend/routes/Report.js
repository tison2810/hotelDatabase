const express = require('express');
const router = express.Router();

const reportControler = require('../controller/report');

router.get('/report/get',reportControler.getReports);

router.post('/report/post', reportControler.addReports);

router.post('/report/delete', reportControler.deleteReport);

router.get('/report/filter', reportControler.findReportbyId);

module.exports = router;