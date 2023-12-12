const db = require('../util/database')
const Salary = require('../model/salary');

exports.getSalary = (req, res, next) => {
    let MucLuong = req.query.MucLuong;
    let sql = Product.get();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
}