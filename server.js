var connect = require('connect');
var url = require('url');


var app = connect();
var server = app.listen(process.env.PORT||3000, '0.0.0.0', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log();
});

// API
app.use('/lab2',function(req, res, next){
	var qs = url.parse(req.url, true).query;
	var method = qs.method;
	var x = qs.x;
	var y = qs.y;

	switch(method) {
    case "add":
        res.end(x + '+' + y + '=' + (parseInt(x) + parseInt(y)));
        break;
    case "subtract":
        res.end(x + '-' + y + '=' + (x - y));
        break;
    case "multiply":
        res.end(x + '*' + y + '=' + (x * y));
		break;
	case "divide":
        res.end(x + '/' + y + '=' + (x / y));
		break;
	default:
		res.end("It seems we've taken a wrong turn.");
	}

	res.end('<h1>Calculator</h1>' + x + [method] + y)

});
