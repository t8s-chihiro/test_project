// var http = require('http');
// var url = require('url');

// var server = http.createServer(function(req, res) {
// 	  if (req.method === 'POST') {
// 	    var body = '';
// 	    req.on('data', function(chunk) {
// 	      body += chunk;
// 	    });
// 	    req.on('end', function() {
// 	      console.log(body);
// 	    });
// 	  } else if (req.method === 'GET') {
// 	    var url_parse = url.parse(req.url, true);
// 	    console.log(url_parse);
// 	  } else {
//             res.write('未対応');
// 	  }

// 	  res.end();
// }).listen(8000);

// ↑ Node js no frame work
// ↓ Use Express frame work

var express = require('express');
var app = express();

const port = 8000;


// var bodyParser = require('body-parser');
// app.use(bodyParser.raw({type:'*/*'}));

app.listen(port, () => {
	console.log('server listen...');
});

app.post('/', function(req, res) {
	console.log(req.body);
	res.end();
});

app.get('/test1', function(req, res) {
	res.send('TEST1\n');
});

app.get('/test2', (req, res) => {
	res.send('TEST2\n');
});