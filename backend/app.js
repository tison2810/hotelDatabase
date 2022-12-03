const express = require('express')
const app = express();

app.listen(8080, (req, res, next) => {
    console.log('Server is listen on port 8080')
})