const express = require('express');
const server = express();
const port = 8080;
const koders = [
    {
        name: 'omar',
        generacion: '33'
    },
    {
        name: 'hugo',
        generacion: '33'
    },
    {
        name: 'omar',
        generacion: '33'
    }
];
//Habilita nuestro server para poder recibir apiticiones en formato json
server.use(express.json())

server.get('/', (request, response) => {
    console.log('GET root');
   
    response.writeHead(400, {
        'Content-Type': 'text/plain'
    });

    response.end("Hola mundo");
});

server.post("/koders", (request, response) => {
    console.log('body: ', request.body   )
    const newKodername = request.body.name
    const newKodergeneration = request.body.generacion

    const newkoder = {
        name: newKodername, 
        generacion: newKodergeneration
    }

    koders.push(newkoder)
        response.json(koders)
    
});

// Responder lista de koders
server.get('/koders', (request, response) => {
   /* response.writeHead(200, {
        "Content-Type": "application/json"
    }); */
    
    
    
response.status(500)
    response.end(JSON.stringify(koders));
});



server.listen(port, () => {
    console.log("Server ready");
});


