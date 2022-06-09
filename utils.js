const fs = require("fs");

function writeDataToFile(filename, data){
    fs.writeFileSync(filename, JSON.stringify(data), "utf-8", (error)=>{
        console.log(error)
    })
}

function getPostData(req){
    return new Promise((resolve, reject) => {
        let body = ""
        req.on("data", (chunk) => {
            body += chunk.toString()
        })

        req.on("end", (error)=>{
            if (error){
                reject("Error")
            }
            else{
                resolve(body)
            }          

        })
    });
}

module.exports = { writeDataToFile, getPostData}