const mysql = require('mysql2')

const connect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'hoteldatabase',
    password:'',
});
module.exports = connect;