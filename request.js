var express = require("express");
var port = process.env.PORT || 8080;

var app = express();



app.get('/', function(request, response) {
  var ip = request.ip;
  var lang = request.headers["accept-language"];
  var user = request.headers["user-agent"];

  var result = '{"ipaddress" : '+ip+', "language" : '+lang+',"software" : '+user+'}';
  response.send(result);
});



app.listen(port, function () {
  console.log('listening on port '+port);
});
