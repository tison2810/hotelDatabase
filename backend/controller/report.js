const db = require('../util/database')
const Report = require('../model/report');

exports.getReports = (req, res, next) => {
    let sql = Report.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
}