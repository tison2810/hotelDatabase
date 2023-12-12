const db = require('../util/database');

module.exports = class Apartment {
    constructor(MasoCN) {
        this.MasoCN = MasoCN;
    }
    static fetchAll() {
        const sql = 'SELECT * FROM ChiNhanh';
        return sql;
    }
    static sum() {
        const sql = 'SELECT TongDoanhThuCN(?,?,?) as TotalIncome';
        return sql;
    }
}