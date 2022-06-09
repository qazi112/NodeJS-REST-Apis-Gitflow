const http = require("http");
const { getProducts, getOneProduct, createProduct, updateProduct} = require("./controllers/productController");
const db = require("./db")


const server = http.createServer((req, res) => {
   
    if (req.url === "/api/products" && req.method == "GET"){
        getProducts(req, res);
        
    }
    else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === "GET"){

        const id = req.url.split("/")[3];
        console.log(id)
        getOneProduct(req, res, id);
    }

    else if(req.url === "/api/products" && req.method === "POST"){
        
        createProduct(req, res)
    }
    else if(req.url.match(/\/api\/products\/([aA-zZ]+)/) && req.method === "PUT"){
        const title = req.url.split("/")[3];
        updateProduct(req, res, title);
    }
    else{
        res.writeHead(404, "Not Found", {"Content-Type": "text/html"});
        res.end("Not Found")
    }
    


});

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log("Server running on PORT: "+port);
});