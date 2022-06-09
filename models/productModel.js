const products = require("../data/products.json");
const { v4: uuidv4 } = require("uuid")
const { writeDataToFile } = require("../utils")

function findAll(){
    return new Promise((resolve, reject) => {
        resolve(products);
        reject({message: "Error"})
    })
}

function findById(id){
    return new Promise((resolve, reject) => {

        const product = products.filter((value)=>{
            return value.id == id
        })
        resolve(product[0])
    })
}
function createProduct(product){
    return new Promise((resolve, reject) => {

        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct);
        writeDataToFile("./data/products.json", products);
        
        resolve(newProduct);
    });
}
module.exports = { findAll, findById, createProduct }