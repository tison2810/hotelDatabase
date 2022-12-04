const Customer = require('../model/customer');
const db = require('../util/database');

exports.getCustomer = (req, res, next) => {
    let sql = Customer.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });

}