const Employee = require('../model/employee');
const db = require('../util/database')

exports.getEmployees = (req, res, next) => {    
    let sql = Employee.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
    
} 
exports.addEmployee = (req, res, next) => {
    const CCCD = req.body.CCCD;
    const CCCD_Mgr = req.body.CCCD_Mgr
    const HoTen = req.body.HoTen;
    const NgaySinh = req.body.NgaySinh;
    const SoDienThoai = req.body.SoDienThoai;
    const GioiTinh = req.body.GioiTinh;
    const Email = req.body.Email;
    const Diachi = req.body.Diachi;
    const MaCN = req.body.MaCN;
    const MucLuong = req.body.MucLuong;
    const ChucVu = req.body.ChucVu;
    let QLFlag = 0;
    let LTFlag = 0; 
    let PVFlag = 0;
    if (ChucVu == 1) {
        QLFlag = 1;
    }
    else if (ChucVu == 2) {
        LTFlag = 1;
    }
    else {
        PVFlag = 1;
    }
    let sql = Employee.save();
    db.execute(sql, [CCCD, HoTen, CCCD_Mgr, NgaySinh, SoDienThoai, GioiTinh, Email, Diachi, MaCN, MucLuong, QLFlag, LTFlag, PVFlag], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Success, Back to Your App');
        }
    });   
}
exports.updateEmployee = (req, res, next) => {
    const CCCD = req.body.CCCD;
    const NgaySinh = req.body.NgaySinh;
    const SoDienThoai = req.body.SoDienThoai;
    const Email = req.body.Email;
    const Diachi = req.body.Diachi;
    const MucLuong = req.body.MucLuong;
    let sql = Employee.update();
    db.execute(sql, [CCCD, NgaySinh, SoDienThoai, Email, Diachi, MucLuong], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Success, Back to Your App');
        }
    });
}
exports.deleteEmployee = (req, res, next) => {
    const CCCD_NV = req.body.CCCD;
    let sql = Employee.delete();
    db.execute(sql, [CCCD_NV], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('Success, Back to Your App');
        }
    }
    );
}
exports.findEmployeebyId = (req, res, next) => {
    let CCCD = req.query.CCCD;
    if (!CCCD || isNaN(CCCD)) {
        res.send('parameter error');    
        return;
    }
    let sql = Employee.filterById() + String(CCCD);
    db.execute(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
    
}