const productModel = require("../models/productModel");

async function getProducts(req, res){
    try {
        const products = await productModel.findAll()
        
        res.writeHead(200, "OK", {"Content-Type" : "application/json"})
        res.end(JSON.stringify(products))

    } catch (error) {
        console.log(error)
    }
}
async function getOneProduct(req, res, id){
    try {
        const product = await productModel.findById(id);
        if (!product){

            res.writeHead(404, "Not Found", {"Content-Type" : "application/json"})
            res.end(JSON.stringify({message: "Product not found"}))

        }else{

            res.writeHead(200, "OK", {"Content-Type" : "application/json"})
            res.end(JSON.stringify(product))
        }
        
    } catch (error) {
      console.log(error)  
      res.end()
    }
    
}

async function createProduct(req, res){
    try {
        const product = {
            title: "Testing product",
            description: "test product"
        }
        let body = ""
        req.on("data", (chunk) => {
            body += chunk.toString()
        })  

        req.on("end", () => {
            console.log(body);
        })
        const newProduct = await productModel.createProduct(product)
        res.writeHead(200, {'Content-Type' : "application/json"});
        res.end(JSON.stringify(newProduct))

    } catch (error) {
        console.log(error)
        res.end("Error Occured" + error)
    }
}

module.exports = {getProducts, getOneProduct, createProduct}