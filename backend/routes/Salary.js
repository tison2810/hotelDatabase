const express = require('express');
const router = express.Router();

const salaryControler = require('../controller/salary');

router.get('/salary/get', salaryControler.getSalary);
 
module.exports = router;