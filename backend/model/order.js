const db = require('../util/database');

module.exports = class Order {
    constructor(SoDienThoai) {
        this.SoDienThoai = SoDienThoai;
    }
    static get() {
        const sql = 'CALL listOrderByPhoneNumber(?)';
        return sql;
    }

    static sum() {
        const sql = 'SELECT TongChiTieu(?) as TotalExpenses';
        return sql;
    }

}