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
        console.log(product)
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

function update(product, id){
    return new Promise((resolve, reject) => {
        
        const index = products.findIndex((p) => p.id == id)
        products[index] = {id, ...product};
        writeDataToFile("./data/products.json", products)
        resolve(products[index])
    });
}
module.exports = { findAll, findById, createProduct, update }