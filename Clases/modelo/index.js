const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Hola mundo")
})

server.listen(8080, () => {
    console.log("El servidor está escuchando en el puerto 8080");
});

const otroServer = http.createServer((request, response) => {
    console.log("Otro servidor está escuchando en el puerto 8081");
});
