const Booking = require('../model/booking');
const db = require('../util/database');

exports.postBooking = (req, res, next) => {
    const username = req.body.username;
    const MaSoLDP = req.body.MaSoLDP;
    const MaCN = req.body.MaCN;
    const TenPhong = req.body.TenPhong;
    const ThoiGianNhanP = req.body.ThoiGianNhanP;
    const ThoiGianTraP = req.body.ThoiGianTraP;
    const CCCDLT = req.body.CCCDLT;
    let sql = Booking.save();
    db.execute(sql, [username, MaSoLDP, MaCN, TenPhong, ThoiGianNhanP, ThoiGianTraP, CCCDLT], (err, result) => {
        if (err) {
            res.send(err)
            // res.say('Failed, Try Again');
        }
        else {
            res.send('Success, Back to Your App');
        }
    });   
}