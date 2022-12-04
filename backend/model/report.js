const db = require('../util/database');

module.exports = class Report {
    constructor(id, ngayxuat, tinhtrang, manager_id, warehouse_code, transport_code) {
        this.id = id;
        this.ngayxuat = ngayxuat;
        this.tinhtrang = tinhtrang;
        this.manager_id = manager_id;
        this.warehouse_code = warehouse_code;
        this.transport_code = transport_code;
       
    }
    static save() {
        return db.execute(
            'INSERT INTO bien_ban_xuat_nhap (ID, Ngay_xuat_bien_ban, Tinh_trang, ma_nv_quan_ly_kho, ma_kho, ma_chuyen) VALUES (?, ?, ?, ?, ?, ?)',
            [this.id, this.ngayxuat, this.tinhtrang, this.manager_id, this.warehouse_code, this.transport_code]
        );
    }
    static fetchAll() {
        const rows = 'SELECT * FROM bien_ban_xuat_nhap';    
        return rows;
        
    }
    static deleteById(id) {
        return db.execute('SELECT * FROM bien_ban_xuat_nhap WHERE bien_ban_xuat_nhap.ID = ?', [id]);
    }
}