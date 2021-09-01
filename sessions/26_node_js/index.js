let http = require("http");
    // http.createServer();
    // requestListener function
    //listen to port
const port = 3000
// http.createServer(requestListener).listen(8080);
http.createServer((request,response) => {
    //where we put request
    response.writeHead(200,
        {"Content-Type":"text/html"});
        response.write("Hellow");
        response.end()
}).listen(port)
