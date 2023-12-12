const db = require('../util/database');

module.exports = class Employee {
    constructor(CCCD, CCCD_Mgr, HoTen, NgaySinh, SoDienThoai, GioiTinh, Email, Diachi, MaCN, MucLuong, QLFlag, LTFlag, PVFlag) {
        this.CCCD_NV = CCCD;
        this.CCCD_Mgr = CCCD_Mgr;
        this.Ten_NV = HoTen;
        this.NgaySinh_NV = NgaySinh;
        this.SoDT_NV = SoDienThoai;
        this.GioiTinh_NV = GioiTinh;
        this.Email = Email;
        this.DiaChi = Diachi;
        this.Ma_CN = MaCN;
        this.MucLuong = MucLuong;
        this.QLFlag = QLFlag;
        this.LTFlag = LTFlag;
        this.PVFlag = PVFlag;
    }
    static save() {
        const sql = 'CALL insertEmployee(?,?,?,?,?,?,?,?,?,?,?,?,?)';
        return sql;
    }
    static fetchAll() {
        const rows = 'SELECT ConNguoi.CCCD, ConNguoi.HoTen, ConNguoi.SoDienThoai, ConNguoi.GioiTinh, ConNguoi.Email FROM ConNguoi INNER JOIN NhanVien ON ConNguoi.CCCD = NhanVien.CCCD';    
        return rows;
        
    }
    static delete() {
        const sql = 'CALL deleteEmployee(?)';
        return sql;
    }
    static update() {
        const sql = 'CALL updateEmployee(?,?,?,?,?,?)';
        return sql;
    }
    static findById(id) {
        return db.execute('SELECT * FROM nhan_vien WHERE employee.Ma_NV = ?', [id]);
    }
}