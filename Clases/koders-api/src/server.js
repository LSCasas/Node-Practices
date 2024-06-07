//Creación de servidor
const cors = require("cors")
const express = require('express');

const kodersRouter = require('./routes/koders.router');
const authRouter = require('./routes/auth.router');
const generationRouter = require('./routes/generations.router');


const app = express();
//Middleware
app.use(cors())
app.use(express.json());

app.use('/koders', kodersRouter);

app.use('/auth', authRouter);
app.use('/generations', generationRouter);

app.get('/', (require, response) => {
    response.json({
        message: "Koders APIv1"
    });
});

module.exports = app;
