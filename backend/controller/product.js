const db = require('../util/database')
const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    let sql = Product.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
}
exports.getProductType = (req, res, next) => {
    let id = req.query.id;
    console.log(String(id))
    let sql = Product.filterById() + String(id);
    db.execute(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
}