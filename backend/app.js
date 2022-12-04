const express = require('express')
const app = express();
const bodyParser = require('body-parser');


const employeeRoute = require('./routes/Employee.js');

app.use(bodyParser.json());

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(employeeRoute);

app.listen(8080, (req, res, next) => {
    console.log('Server is listen on port 8080')
})

