var express = require('express');
var router = express.Router();
var bender = require('../data/bender.json');

function getRandom(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

router.get('/', function (req, res) {
    res.send("Hello World");
});

router.get("/bender", function (req, res) {
    return res.send({ "Quote": bender.quotes[getRandom(bender.quotes.length)], "Author": "Bender Rodriguez" });
});

module.exports = router;
