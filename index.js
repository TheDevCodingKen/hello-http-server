const http = require('http');

const server = http.createServer(function (request, response) {
    //log a message when request is received
    console.log('Received ' + request.method + ' request for: ' + request.url);
    //tell the browser everything is OK and send headers
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //send body response
    response.write('Hello World');
    //tell the server that all of the response headers and body have been sent
    response.end();
});

//listen for incoming connections
server.listen(8080, 'localhost', null, function () {
    //log a message that the server is listening and port
    console.log('Server is listening on localhost:8080');
})
