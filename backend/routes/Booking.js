const express = require('express');
const router = express.Router();

const bookingControler = require('../controller/booking');

router.post('/booking/post',bookingControler.postBooking);

module.exports = router;