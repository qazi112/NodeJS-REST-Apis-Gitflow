const productModel = require("../models/productModel");
const { getPostData } = require("../utils")
// @GET All products 
// GET /api/products
async function getProducts(req, res){
    try {
        const products = await productModel.findAll()
        
        res.writeHead(200, "OK", {"Content-Type" : "application/json"})
        res.end(JSON.stringify(products))

    } catch (error) {
        console.log(error)
    }
}
// GET /api/product/id
// GET product by id
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
// create product 
// POST /api/products
async function createProduct(req, res){
    try {

        const product = await getPostData(req)
        const newProduct = await productModel.createProduct(JSON.parse(product))

        res.writeHead(201, "created", {"Content-Type" : "application/json"})
        res.end(JSON.stringify(newProduct))
    } catch (error) {
        console.log(error)
        res.end("Error Occured" + error)
    }
}

async function updateProduct(req, res, id){
    try {
        const product = await productModel.findById(id);
        if (!product){

            res.writeHead(404, "Not Found", {"Content-Type" : "application/json"})
            res.end(JSON.stringify({message: "Product not found"}))

        }else{
            const data = await getPostData(req)
            const {firstName, lastName, gender} = JSON.parse(data)

            const productData = {
                firstName : firstName || product.firstName,
                lastName : lastName || product.lastName,
                gender : gender || product.gender,
            }
            const updProduct = await productModel.update(productData, id)
    
            res.writeHead(200, "OK", {"Content-Type" : "application/json"})
            res.end(JSON.stringify(updProduct));
        }
        
    } catch (error) {
      console.log(error)  
      res.end()
    }
    
}


module.exports = {getProducts, getOneProduct, createProduct, updateProduct}