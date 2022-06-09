const http = require("http");

const server = http.createServer((req, res) => {

});

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log("Server running on PORT: "+port);
});