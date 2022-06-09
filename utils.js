const fs = require("fs");

function writeDataToFile(filename, data){
    fs.writeFileSync(filename, JSON.stringify(data), "utf-8", (error)=>{
        console.log(error)
    })
}

module.exports = { writeDataToFile }