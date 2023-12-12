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

exports.addCustomer = (req, res, next) => {
    const CCCD = req.body.CCCD;
    const HoTen = req.body.HoTen;
    const NgaySinh = req.body.NgaySinh;
    const SoDienThoai = req.body.SoDienThoai;
    const GioiTinh = req.body.GioiTinh;
    const Email = req.body.Email;
    let sql = Customer.save();
    db.execute(sql, [CCCD, HoTen, NgaySinh, SoDienThoai, GioiTinh, Email], (err, result) => {
        if (err) {
            res.send('Fail to add Customer');
        }
        else {
            res.send('Success, Back to Your App');
        }
    });

    
}
exports.deleteCustomer = (req, res, next) => {
    const CCCD = req.body.CCCD;
    if (!CCCD || isNaN(CCCD)) {
        res.send('parameter error');
        return;
    }
    let sql = Customer.deleteById();
    db.execute(sql, [CCCĐ], (err, result) => {
        if (err) {
            res.send('Fail to delete Customer');
        }
        else {
            res.send('Success, Back to Your App');
        }
    }
    );
}
exports.findCustomerbyId = (req, res, next) => {
    const CCCD = req.body.CCCD;
    if (!CCCD || isNaN(CCCD)) {
        res.send('parameter error');    
        return;
    }
    let sql = Customer.filterById() + String(CCCD);
    db.execute(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
    
}