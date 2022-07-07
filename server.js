const http = require('http');

const server = http.createServer((req,res)=>{

    const url = req.url;

    switch (url) {
        case "/":
                res.writeHead(200, { "Content-Type": "text/html"})
                res.write("<h2>WELCOME TO INDEX PAGE</h2>")
            break;
        case "/about":
                res.writeHead(200, { "Content-Type": "text/html"})
                res.write("<h2>WELCOME TO ABOUT PAGE</h2>")
            break;
        case "/contact":
                res.writeHead(200, { "Content-Type": "text/html"})
                res.write("<h2>WELCOME TO CONTACT PAGE</h2>")
            break;
        default:
                res.writeHead(404, { "Content-Type": "text/html"})
                res.write("<h2>404 PAGE IS NOT FOUND</h2>")
            break;
    }
    res.end();
});

const port = 5000;
server.listen(port,()=> {
    console.log(`Server has been started at port ${port}!`)
});
