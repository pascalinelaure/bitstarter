var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var file = "index.html";
var frBuffer = fs.readFileSync(file); //'Hello world2!'


app.get('/', function(request, response) {
  response.send(frBuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
