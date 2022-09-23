const http = require('http');     
const fs = require('fs');
const url = require("url");

const lookup = require("mime-types").lookup;

const server = http.createServer((req,res) => {
    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    if (path == ""){
        path = "index.html";
    }
    let file = __dirname + "/public/" + path;

    fs.readFile(file, function(err,content){
        if (err){
            console.log(file + " not found");
            res.writeHead(404);
            res.end();
        }
        else{
            console.log("Return path: " + path);
            let mime = lookup(path);
            res.writeHead(200, { "Content-type":mime });
            res.end(content);
        }
    });
    console.log("Path requested: " + path);
});

server.listen(8000);
