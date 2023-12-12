const express = require('express');
const router = express.Router();

const apartmentControler = require('../controller/apartment');

router.get('/apartment/get',apartmentControler.getApartment);

router.get('/apartment/sum',apartmentControler.getSumIncome);
 
module.exports = router;