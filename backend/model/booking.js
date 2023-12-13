const db = require('../util/database');

module.exports = class Booking {
    constructor(username, MaSoLDP, MaCN, TenPhong, ThoiGianNhanP, ThoiGianTraP, CCCDLT) {
        this.username = username;
        this.MaSoLDP = MaSoLDP;
        this.MaCN = MaCN;
        this.TenPhong = TenPhong;
        this.ThoiGianNhanP = ThoiGianNhanP;
        this.ThoiGianTraP = ThoiGianTraP;
        this.CCCDLT = CCCDLT;
    }
    static save() {
        const sql = 'SELECT * FROM ChiNhanh';
        return sql;
    }
}