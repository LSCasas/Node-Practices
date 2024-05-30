// Definir nuestro servidor
const express = require('express');

const kodersRouter = require('./koders.router');
const mentorsRouter = require('./mentors.router');

// Crear una instancia de la aplicación Express
const server = express();

// Usar middleware para parsear JSON
server.use(express.json());

// Middleware de aplicación para autorización
server.use((req, res, next) => {
    console.log("middleware de aplicacion");
    const authorization = req.headers.authorization;
    
    if (authorization === 'alohomora') {
        req.isAWizard = true
        next();
    } else {
        res.status(403).json({
            message: 'No tienes acceso'
        });
    }
});

// Montar los routers en el servidor
server.use("/koders", kodersRouter);
server.use("/mentors", mentorsRouter);

// Ruta principal del servidor
server.get('/', (req, res) => {
    res.json({
        message: "kodemia APIv1"
    });
});

// Exportar el servidor para usarlo en otros archivos
module.exports = server;
