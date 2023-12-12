const db = require('../util/database')
const Apartment = require('../model/apartment');

exports.getApartment = (req, res, next) => {
    let sql = Apartment.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
}

exports.getSumIncome = (req, res, next) => {
    const apartmentId = req.query.MasoCN;
    const month = req.query.month;
    const year = req.query.year;
    let sql = Apartment.sum();
    db.query(sql, [apartmentId, month, year], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            // console.log(result);
            res.json(result);
        }
    });
}