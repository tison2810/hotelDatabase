const db = require('../util/database')
const Warehouse = require('../model/warehouse');

exports.getWarehouses = (req, res, next) => {
    let sql = Warehouse.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
}