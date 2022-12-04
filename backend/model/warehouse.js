const db = require('../util/database');

module.exports = class WareHouse {
    constructor(id, square, address, province, manager_id) {
        this.id = id;
        this.square = square;
        this.address = address;
        this.province = province;
        this.manager_id = manager_id; 
    }
    static save() {
        return db.execute(
            'INSERT INTO kho (Ma_kho, Dien_tich, Dia_chi, ma_tinh, ma_nv_quan_ly_kho) VALUES (?, ?, ?, ?, ?)',
            [this.id, this.square, this.address, this.province, this.manager_id]
        );
    }
    static fetchAll() {
        const rows = 'SELECT * FROM kho';    
        return rows;
        
    }
    static findById(id) {
        return db.execute('SELECT * FROM kho WHERE kho.Ma_NV = ?', [id]);
    }
}