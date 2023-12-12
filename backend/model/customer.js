const db = require('../util/database');

module.exports = class Customer {
    constructor(CCCD, HoTen, TenDangNhap, matkhau_KH, NgaySinh, SoDienThoai, GioiTinh, Email, Diachi) {
        this.CCCD_KH = CCCD;
        this.Ten_KH = HoTen;
        this.TenDangNhap_KH = TenDangNhap;
        this.MatKhau_KH = matkhau_KH;
        this.NgaySinh_KH = NgaySinh;
        this.SoDT_KH = SoDienThoai;
        this.GioiTinh_KH = GioiTinh;
        this.Email = Email;
        this.Diachi = Diachi;
    }
    static save() {
        const sql = 'CALL insertCustomer(?,?,?,?,?,?,?,?,?)';
        return sql;
    }
    static update() {
        const sql = 'CALL updateCustomer(?,?,?,?,?,?)';
        return sql;
    }
    static fetchAll() {
        const rows = 'SELECT ConNguoi.CCCD, ConNguoi.HoTen, ConNguoi.SoDienThoai, ConNguoi.GioiTinh, ConNguoi.Email FROM ConNguoi INNER JOIN KhachHang ON ConNguoi.CCCD = KhachHang.CCCD';
        return rows;
        
    }
    static delete() {
        const sql = 'CALL deleteCustomer(?)';
        return sql;
    }
    static filterById() {
        const sql = 'SELECT ConNguoi.CCCD, ConNguoi.HoTen, ConNguoi.SoDienThoai, ConNguoi.GioiTinh, ConNguoi.Email FROM ConNguoi WHERE CCCD = '
        return sql;
    }
}