const express = require('express');
const server = express();
server.use(express.json());

const todos = [];

// Listar todos los todos
server.get('/todos', (request, response) => {
    response.json({
        message: 'Todos listados',
        todos: todos,
    });
});

// Agregar un todo
server.post('/todos', (request, response) => {
    const newTodo = request.body.todo;

    if (!newTodo) {
        response.status(400);
        response.json({
            message: 'Se requiere un todo',
        });
        return;
    }

    todos.push(newTodo);
    response.json({
        message: 'Nuevo todo agregado',
        todos: todos,
    });
});

// Eliminar un todo por su índice
server.delete('/todos/:idx', (request, response) => {
    const indexToDelete = request.params.idx;
    const indexAsInteger = parseInt(indexToDelete);

    if (isNaN(indexAsInteger)) {
        response.status(400);
        response.json({
            message: 'Índice no válido, debe ser un número',
        });
        return;
    }

    if (indexAsInteger < 0 || indexAsInteger >= todos.length) {
        response.status(400);
        response.json({
            message: 'Índice no válido, está fuera de rango',
        });
        return;
    }

    todos.splice(indexAsInteger, 1);

    response.json({
        message: 'Todo eliminado exitosamente',
        todos: todos,
    });
});

server.listen(8080, () => {
    console.log("Servidor en ejecución en el puerto: 8080");
});


