var bender = require('../quotes/bender.js');

var appRouter = function (app) {
    app.get('/', function(req, res) {
        res.send("Hello World");
    });

    app.get("/bender", function(req, res) {
    	return res.send({ "Quote": bender.get(), "Author": "Bender Rodriguez" });
    });
}

module.exports = appRouter;
