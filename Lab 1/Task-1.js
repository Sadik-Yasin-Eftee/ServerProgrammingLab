var http = require("http")

var server = http.createServer((req,res) =>{
    res.write("Hello World");
    res.end();
});

server.listen(8000);