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

module.exports = {getProducts, getOneProduct}