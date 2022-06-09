const Product = require("../models/productModel");
const { getPostData } = require("../utils")
// @GET All products 
// GET /api/products
function getProducts(req, res){
    Product.find().then((message) => {
        console.log(message);
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.end(JSON.stringify(message))
    })
}

// create product 
// POST /api/products
async function createProduct(req, res){
   try {
        const data = await getPostData(req);
        console.log(data);
        const {title, description, price, _id} = JSON.parse(data)
        const newProduct = new Product({
            _id : _id,
            title: title,
            description: description,
            price: price
        })
        newProduct.save((error) => {
            if(error) throw error
            
            console.log("Product added")
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(newProduct))
        })

   } catch (error) {
       
   }
}

async function updateProduct(req, res, title){
    try {
        const postData = await getPostData(req)
        
        const updProduct = await Product
                .findOneAndUpdate({title : title},JSON.parse(postData),
                {new: true})
        

        res.writeHead(200, "OK", {"Content-Type" : "application/json"})
        res.end(JSON.stringify(updProduct));
        
        
    } catch (error) {
      console.log(error)  
      res.end()
    }
    
}


module.exports = {getProducts, createProduct, updateProduct}