var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = require('./routes')
app.use('/api', router);

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.PORT || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var server = app.listen(server_port, server_ip_address, function () {
    console.log("Listening on port %s...", server.address().port);
});