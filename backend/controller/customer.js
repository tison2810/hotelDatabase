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
    const TenDangNhap = req.body.TenDangNhap;
    const MatKhau = req.body.MatKhau;
    const NgaySinh = req.body.NgaySinh;
    const SoDienThoai = req.body.SoDienThoai;
    const GioiTinh = req.body.GioiTinh;
    const Email = req.body.Email;
    const Diachi = req.body.Diachi;
    let sql = Customer.save();
    db.execute(sql, [CCCD, HoTen, TenDangNhap, MatKhau, NgaySinh, SoDienThoai, GioiTinh, Email, Diachi], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Success, Back to Your App');
        }
    });   
}
exports.updateCustomer = (req, res, next) => {
    const TenDangNhap = req.body.TenDangNhap;
    const MatKhau = req.body.MatKhau;
    const NgaySinh = req.body.NgaySinh;
    const SoDienThoai = req.body.SoDienThoai;
    const Email = req.body.Email;
    const Diachi = req.body.Diachi;
    let sql = Customer.update();
    db.execute(sql, [TenDangNhap, MatKhau, NgaySinh, SoDienThoai, Email, Diachi], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Success, Back to Your App');
        }
    });
}
exports.deleteCustomer = (req, res, next) => {
    const TenDangNhap = req.body.TenDangNhap;
    // if (!TenDangNhap || isNaN(TenDangNhap)) {
    //     res.send('parameter error');
    //     return;
    // }
    let sql = Customer.delete();
    db.execute(sql, [TenDangNhap], (err, result) => {
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
    // let CCCD = req.query.CCCD;
    // if (!CCCD || isNaN(CCCD)) {
    //     res.send('parameter error');    
    //     return;
    // }
    // let sql = Customer.filterById() + String(CCCD);
    // db.execute(sql, (err, result) => {
    //     if (err) console.log(err);
    //     else {
    //         res.json(result);
    //     }
    // });
    let CCCD = req.query.CCCD;
    let sql = Customer.filterById() + String(CCCD);
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });

}