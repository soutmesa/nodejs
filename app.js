var http = require('http');// add http module
var myserver = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("<b>hello</b> World.");
	response.end();
});// create a serve
myserver.listen(3000);