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