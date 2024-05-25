//definir nuestro servidor
const express = require('express');
const koderUseCase = require("./koders_usecase")


//const app = express()
const server = express();

server.use(express.json());



server.get('/', (req, res) => {
    res.json({
        message: "kodemia APIv1"
    });
});


// GET /koders -> Endpoint
server.get('/koders',   (req, res) => {
    try {
const koders = koderUseCase.getAll()
res.json({
    message: 'All koders',
    data: {
        koders
    },
})
    } catch (error){
        res.status(error.status || 500)
        res.json({
            error: error.message
        })

    }
}) 

//end point of add a koder
server.post("/koders", (req, res) => {
try {
    const newKoder = req.body
    const koders = koderUseCase.add(newKoder)

    res.json({
        message: 'koder added',
        data: {koders},
    })
} catch (error){
    res.status(error.status || 500)
    res.json({
        error: error.message,
    })
}
})

//end point of delete all
server.delete("/koders", (req, res) => {
    try{ 
        const koders = koderUseCase.deleteAll()
        res.json({
            message: "all koders deleted",
            data: { koders},
        })

    } catch (error){
res.status(error.status ||500)
res.json({
    error: error.message,
})
    }
})



// endpoint of Delete by name
server.delete("/koders/:name", (req, res) => {
    try {
        const name = req.params.name;
        const koders = koderUseCase.deleteByName(name);
        res.json({
            message: "Koder deleted",
            data: { koders }
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            error: error.message
        });
    }
});





module.exports = server;