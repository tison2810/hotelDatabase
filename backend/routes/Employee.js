const express = require('express');
const router = express.Router();

const employeeControler = require('../controller/employee');

router.get('/employee/get',employeeControler.getEmployees);

router.post('/employee/post', employeeControler.addEmployee);

router.post('/employee/delete', employeeControler.deleteEmployee);

router.get('/employee/filter', employeeControler.findEmployeebyId);

router.post('/employee/update', employeeControler.updateEmployee);
 
module.exports = router;