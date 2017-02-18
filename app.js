var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = require('./routes')
app.use('/api', router);

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});