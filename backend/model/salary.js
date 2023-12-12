const db = require('../util/database');

module.exports = class Salary {
    constructor(MucLuong) {
        this.MucLuong = MucLuong;
    }
    static get() {
        const sql = 'CALL listEmployeeBySalary(?)';
        return sql;
    }
}