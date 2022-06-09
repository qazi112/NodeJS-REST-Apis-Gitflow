const products = require("../data/products.json");


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

module.exports = { findAll, findById }