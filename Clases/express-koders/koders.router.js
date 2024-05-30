const express = require("express");
const koderUseCase = require('./koders_usecase');

// Crear un router de Express
const router = express.Router();

// Middleware de nivel de router
router.use((req, res, next) => {
    console.log("middleware a nivel de router (koders");
    next();
});

router.get('/', (req, res, next) => {
    console.log("middleware a nivel de router (koders)");
    next();
});


// GET /koders -> Endpoint para obtener todos los koders
router.get('/', async (req, res,) => {
    try {
        const koders = await koderUseCase.getAll();
        res.json({
            message: 'All koders',
            data: { koders },
        });
    } catch (error) {
        res.status(error.status || 500).json({
            error: error.message
        });
    }
});

// POST /koders -> Endpoint para agregar un koder
router.post("/", async (req, res) => {
    try {
        const newKoder = req.body;
        const koders = await koderUseCase.add(newKoder);
        res.json({
            message: 'koder added',
            data: { koders },
        });
    } catch (error) {
        res.status(error.status || 500).json({
            error: error.message,
        });
    }
});

// DELETE /koders -> Endpoint para eliminar todos los koders
router.delete("/", async (req, res) => {
    try {
        const koders = await koderUseCase.deleteAll();
        res.json({
            message: "all koders deleted",
            data: { koders },
        });
    } catch (error) {
        res.status(error.status || 500).json({
            error: error.message,
        });
    }
});

// DELETE /koders/:name -> Endpoint para eliminar un koder por nombre
router.delete("/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const koders = await koderUseCase.deleteByName(name);
        res.json({
            message: "Koder deleted",
            data: { koders },
        });
    } catch (error) {
        res.status(error.status || 500).json({
            error: error.message,
        });
    }
});

module.exports = router;
