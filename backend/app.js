const express = require('express')
const app = express();
const bodyParser = require('body-parser');


const employeeRoute = require('./routes/Employee.js');
const customerRoute = require('./routes/Customer.js');
// const productRoute = require('./routes/Product.js');
// const warehouseRoute = require('./routes/Warehouse.js');
// const reportRoute = require('./routes/Report.js');

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
app.use(customerRoute);
// app.use(productRoute);
// app.use(warehouseRoute);
// app.use(reportRoute);

app.listen(8080, (req, res, next) => {
    console.log('Server is listen on port 8080')
})

