const db = require('../util/database');

module.exports = class Customer {
    constructor(SoDienThoai) {
        this.SoDienThoai = SoDienThoai;
    }
    static getOrder() {
        const sql = 'listOrderByPhoneNumber (?)';
        return sql;
    }
}