const db = require('../util/database');

module.exports = class Customer {
    constructor(CCCD, HoTen, NgaySinh, SoDienThoai, GioiTinh, Email) {
        this.CCCD = CCCD;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.SoDienThoai = SoDienThoai;
        this.GioiTinh = GioiTinh;
        this.Email = Email;
    }
    static save() {
        return db.execute(
            'INSERT INTO KhachHang (CCCD, HoTen, NgaySinh, SoDienThoai, GioiTinh, Email) VALUES (?, ?, ?, ?, ?, ?)',
            [this.CCCD, this.HoTen, this.NgaySinh, this.SoDienThoai, this.GioiTinh, this.Email]
        );
    }
    static fetchAll() {
        const rows = 'SELECT * FROM ConNguoi';
        return rows;
        
    }
    static deleteById(id) {
        return db.execute('SELECT * FROM KhachHang WHERE KhachHang.CCCCD = ?', [CCCD]);
    }
}