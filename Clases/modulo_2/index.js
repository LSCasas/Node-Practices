const http = require("http");

const server = http.createServer((request, response) => {
    console.log("request: ", request);
    const method = request.method;
    const url = request.url;

if (url.startsWith(" /koders")) {
    if (method == "GET") {
        response.end("Listado de Koders")
        const koders = listarKoders()
    }
}



    response.end(`${method}: ${url}`);
});

server.listen(8080, () => {
    console.log("El servidor está escuchando en el puerto 8080");
});


/* const otroServer = http.createServer((request, response) => {
    console.log("Otro servidor está escuchando en el puerto 8081");
});

otroServer.listen(8081, () => {
    console.log("El otro servidor está escuchando en el puerto 8081");
});
*/




// Methods:
// GET -> Obtener (no llevan cuerpo, y si lo llevan se ignoran)
// POST -> Crear
// delete -> Eliminar
// patch -> Actualizar
//put -> Reemplazar

/* URL https://api.kodemia.mx/koders
   GET https://api.kodemia.mx/koders -> Listado de koders
   POST https://api.kodemia.mx/koders -> Crear un koder
   DELETE https://api.kodemia.mx/koders ->  Borra el koder
   
   
   URL https://api.kodemia.mx/mentors
   GET https://api.kodemia.mx/mentors -> Listado de mentores
   GET https://api.kodemia.mx/mentors/123/bootcamps -> Lista de bootcams del mentor correspondiente




   */