const fs = require("fs");

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

module.exports = { getPostData}