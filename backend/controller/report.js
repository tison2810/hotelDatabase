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
    let sql = Report.Save();
    db.execute(sql, [id, ngayxuat, tinhtrang, manager_id, warehouse_code, transport_code], (err, result) => {
        if (err) {
            res.send('Fail to add Report');
        }
        else {
            res.send('Success, Back to Your App');
        }
    });

    
}
exports.deleteReport = (req, res, next) => {
    const id = req.body.id;
    if (!id || isNaN(id)) {
        res.send('parameter error');
        return;
    }
    let sql = Report.deleteById();
    db.execute(sql, [id], (err, result) => {
        if (err) {
            res.send('Fail to add Report');
        }
        else {
            res.send('Success, Back to Your App');
        }
    }
    );
}
exports.findReportbyId = (req, res, next) => {
    let id = req.query.id;
    if (!id || isNaN(id)) {
        res.send('parameter error');    
        return;
    }
    let sql = Report.filterById() + String(id);
    db.execute(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
    
}