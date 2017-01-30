var connect = require('connect');
var http = require('http');
var bodyParser = require('body-parser');


var app = connect();
var server = app.listen(process.env.PORT||3000, '0.0.0.0', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log();
});

app.use(bodyParser.urlencoded({ extended: true }));
// API
app.get('/lab2',function(req, res){
	var method = request.query.method;
	var x = request.query.x;
	var y = request.query.y;

	switch(method) {
    case "add":
        res.send(x+'+'+y+'='(x+y));
        break;
    case "subtract":
        res.send(x+'-'+y+'='(x-y));
        break;
    case "multiply":
        res.send(x+'*'+y+'='(x*y));
		break;
	case "divide":
        res.send(x+'/'+y+'='(x/y));
		break;
	default:
		res.send("It seems we've taken a wrong turn.");
	}

});
