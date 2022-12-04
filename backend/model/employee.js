const db = require('../util/database');

module.exports = class Employee {
    constructor(id, cmnd, ten, phoneNumber) {
        this.id = id;
        this.cmnd = cmnd;
        this.ten = ten;
        this.phoneNumber = phoneNumber;
    }
    static save() {
        return db.execute(
            'INSERT INTO employee (Ma_NV, CMND, Ten, So_dien_thoai) VALUES (?, ?, ?, ?)',
            [this.id, this.cmnd, this.ten, this.phoneNumber]
        );
    }
    static fetchAll() {
        const rows = 'SELECT * FROM nhan_vien';    
        return rows;
        
    }
    static findById(id) {
        return db.execute('SELECT * FROM nhan_vien WHERE employee.Ma_NV = ?', [id]);
    }
}