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
exports.addReports = (req, res, next) => {
    const id = req.body.id;
    const ngayxuat = req.body.ngayxuat ;
    const tinhtrang = req.body.tinhtrang;
    const manager_id = req.body.manager_id;
    const warehouse_code = req.body.warehouse_code;
    const transport_code = req.body.transport_code;
    const report = new Product(id, ngayxuat, tinhtrang, manager_id, warehouse_code, transport_code);
    report
        .save()
        .catch(err=> console.log(err))
}