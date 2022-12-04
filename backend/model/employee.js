const db = require('../util/database');

module.exports = class Employee {
    constructor(id, firstName, lastName, gender, address, number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.address = address;
        this.number -= number;
    }
    static save() {
        return db.execute(
            'INSERT INTO employee (id, firstName, lastName, gender, address, number) VALUES (?, ?, ?, ?, ?, ?)',
            [this.id, this.firstName, this.lastName, this.gender, this.address, this.number]
        );
    }
    static fetchAll() {
        const rows = 'SELECT * FROM employee';    
        return rows;
        
    }
    static findById(id) {
        return db.execute('SELECT * FROM employee WHERE employee.id = ?', [id]);
    }
}