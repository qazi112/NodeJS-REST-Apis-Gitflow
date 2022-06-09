const http = require("http");
const products = require("./data/products")

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === "/api/products" && req.method == "GET"){
        const options = {
            "Content-Type" : "application/json" 
        }
        res.writeHead(200,options)
        res.write(JSON.stringify(products))
        res.end()
    }else{
        res.writeHead(404, "Not Found", {"Content-Type": "text/html"});
        res.end("Not Found")
    }
    


});

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log("Server running on PORT: "+port);
});