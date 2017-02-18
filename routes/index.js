var express = require('express');
var router = express.Router();
var bender = require('../data/bender.json');
var patrick = require('../data/patrick.json');

function getRandom(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

router.get('/', function (req, res) {
    res.send("Hello World");
});

router.get("/bender", function (req, res) {
    return res.send({ "Quote": bender.quotes[getRandom(bender.quotes.length)], "Author": bender.Author });
});

router.get("/patrick", function (req, res) {
    return res.send({ "Quote": patrick.quotes[getRandom(patrick.quotes.length)], "Author": patrick.Author });
});

module.exports = router;
