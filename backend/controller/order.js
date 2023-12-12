const Order = require('../model/order');
const db = require('../util/database');

exports.getOrder = (req, res, next) => {
    let sql = Order.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });

}