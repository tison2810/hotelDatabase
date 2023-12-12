const db = require('../util/database')
const Salary = require('../model/salary');

exports.getSalary = (req, res, next) => {
    const MucLuong = req.query.MucLuong;
    let sql = Salary.get();
    db.query(sql, [MucLuong], (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
            console.log(result);
        }
    });
}