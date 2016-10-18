var express = require("express"),
	http = require("http"),
	app = express(),
	arrays = require("./arrays.js"),
	bodyParser = require("body-parser");

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

http.createServer(app).listen(3000);

app.get('/', function(req, res) {
	res.sendfile("index.html");
});

app.post("/average", function(req, res) {
	var myArray = req.body.myArray;
	var result = arrays.average(myArray);
	res.json({ 'Result:': result });
});

app.post("/largest", function(req, res) {
	var myArray = req.body.myArray;
	var result = arrays.largest(myArray);
	res.json({ 'Result: ': result });
});

app.post("/even", function(req, res) {
	var myArray = req.body.myArray;
	var result = arrays.even(myArray);
	res.json({ 'Result: ': result });
});

app.post("/allEven", function(req, res) {
	var myArray = req.body.myArray;
	var result = arrays.allEven(myArray);
	res.json({ 'Result: ': result });
});

app.post("/arrayContains", function(req, res) {
	var myArray = req.body.myArray;
	var myStr = req.body.myStr;
	var result = arrays.arrayContains(myArray, myStr);
	res.json({ 'Result: ': result });
});

app.post("/arrayContainsTwo", function(req, res) {
	var myArray = req.body.myArray;
	var myStr = req.body.myStr;
	var result = arrays.arrayContainsTwo(myArray, myStr);
	res.json({ 'Result: ': result });
});

app.post("/arrayContainsNTimes", function(req, res) {
	var myArray = req.body.myArray;
	var myStr = req.body.myStr;
	var num = req.body.num;
	var result = arrays.arrayContainsNTimes(myArray, myStr, num);
	res.json({ 'Result: ': result });
});

console.log("Server listening on port 3000");