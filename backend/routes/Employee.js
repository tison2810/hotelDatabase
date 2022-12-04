const express = require('express');
const router = express.Router();

const employeeControler = require('../controller/employee');

router.get('/employee',employeeControler.getEmployees);
 
module.exports = router;