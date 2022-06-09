const mongoose = require("mongoose")

async function getDB(){
    await mongoose.connect("mongodb://localhost:27017/products-db")
}
getDB().then(res =>{
    console.log("Connected")
})


module.exports = mongoose.connection
