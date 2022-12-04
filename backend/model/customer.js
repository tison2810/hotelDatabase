const db = require('../util/database');

module.exports = class Customer {
    constructor(id, cmnd, name, mail) {
        this.id = id;
        this.cmnd = cmnd;
        this.name = name;
        this.mail = mail;
    }
    static save() {
        return db.execute(
            'INSERT INTO khach_hang (Ma_KH, CMND, Ten, Mail) VALUES (?, ?, ?, ?)',
            [this.id, this.cmnd, this.name, this.mail]
        );
    }
    static fetchAll() {
        const rows = 'SELECT * FROM khach_hang';    
        return rows;
        
    }
    static deleteById(id) {
        return db.execute('SELECT * FROM khach_hang WHERE khach_hang.Ma_KH = ?', [id]);
    }
}