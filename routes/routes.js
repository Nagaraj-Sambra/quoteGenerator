var bender = require('../data/bender.json');

var appRouter = function (app) {
    app.get('/', function(req, res) {
        res.send("Hello World");
    });

    app.get("/bender", function(req, res) {
        return res.send({ "Quote": bender.quotes[Math.floor(Math.random() * bender.quotes.length)], "Author": "Bender Rodriguez" });
    });
}

module.exports = appRouter;
