'use strict'

module.exports = function(app) {
  app.route('/')
     .get(function(request, response) {
       var ip = request.headers['x-forwarded-for'] ||
                request.connection.remoteAddress ||
                request.socket.remoteAddress ||
                request.connection.socket.remoteAddress;
      var lang = request.headers["accept-language"].split(',')[0];
      var user = request.headers["user-agent"].split(',')[0];

      var data = {
        'ipaddress':ip,
        'language':lang,
        'software':user
      };

      response.send(JSON.stringify(data));
     });//get
}
