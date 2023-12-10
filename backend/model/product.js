const db = require('../util/database');

module.exports = class Product {
    constructor(id, weight, from, to, type, cost_LT, report_code) {
        this.id = id;
        this.weight = weight;
        this.from = from;
        this.to = to;
        this.type = type;
        this.cost_LT = cost_LT;
        this.report_code = report_code;
       
    }
    static save() {
        return db.execute(
            'INSERT INTO kien_hang (ID, Khoi_luong, Noi_den, Noi_di, Loai, Phi_lien_tinh, ma_bien_ban_gui) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [this.id, this.weight, this.from, this.to, this.type, this.cost_LT, this.report_code]
        );
    }
    static fetchAll() {
        const rows = 'SELECT * FROM kien_hang';    
        return rows;
        
    }
    static filterById() {
        const sql = 'SELECT * FROM kien_hang WHERE kien_hang.ma_bien_ban_gui = '
        return sql;
    }
}