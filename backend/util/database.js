const mysql = require('mysql2')

const connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'transportation',
    password:'password',
});
module.exports = connect;


