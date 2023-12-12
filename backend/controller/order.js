const Order = require('../model/order');
const db = require('../util/database');

exports.getOrder = (req, res, next) => {
    const phoneNumber = req.query.SoDienThoai;
    let sql = Order.get();
    db.query(sql, [phoneNumber], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            // console.log(result);
            res.json(result);
        }
    });

}