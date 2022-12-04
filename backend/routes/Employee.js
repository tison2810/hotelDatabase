const express = require('express');
const router = express.Router();

const employeeControler = require('../controller/employee');

router.get('/employee/get',employeeControler.getEmployees);
 
module.exports = router;