const Employee = require('../model/employee');
const db = require('../util/database')

exports.getEmployees = (req, res, next) => {    
    let sql = Employee.fetchAll();
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else {
            res.json(result);
        }
    });
    
} 
 