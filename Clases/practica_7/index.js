const express = require('express');
const server = express();
server.use(express.json());

const koderList = [];

// Listar Koders con el metodo GET
server.get('/koders', (req, res) => {
    res.json({
        message: 'Koders list',
        koders: koderList
    });
});




// Agregar con el metodo POST
server.post('/koders', (req, res) => {
    const { name, generation, gender, age, isActive } = req.body;

    // Verificar si todos los campos requeridos están presentes
    if (!name || !generation || !gender || !age || isActive === undefined) {
        res.status(400);
        res.json({
            message: 'Incomplete koder data. Please provide all required fields (name, generation, gender, age, isActive).',
        });
        return;
    }

    const newKoder = {
        name,
        generation,
        gender,
        age,
        isActive
    };

    koderList.push(newKoder);
    res.json({
        message: 'New Koder has been added',
        koder: newKoder
    });
});

// Eliminar koder por nombre con el metodo DELETE
server.delete('/koders/:name', (req, res) => {
    const { name } = req.params;
    const index = koderList.findIndex(koder => koder.name === name);
    if (index !== -1) {
        koderList.splice(index, 1);
        res.json({
            message: `Koder with name ${name} has been deleted`
        });
    } else {
        res.status(404).json({
            message: `Koder with name ${name} not found`
        });
    }
});

// Eliminar todos los koders con el metodo DELETE
server.delete('/koders', (req, res) => {
    koderList.splice(0, koderList.length);
    res.json({
        message: 'All koders have been deleted'
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});