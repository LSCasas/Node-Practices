const express = require("express");
const koderUseCase = require("../usecases/koders.usecase");
const auth = require("../middlewares/auth.middleware")
const router = express.Router();

router.use(auth)
// GET /koders
router.get("/", auth,  async (request, response) => {
    try {
        const koders = await koderUseCase.getAll();
        response.json({
            success: true,
            data: { koders },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message,
        });
    }
});


// POST /Koders
router.post('/', async (request, response) => {
    try {
        const koderCreated = await koderUseCase.create(request.body);
        response.status(201).json({
            success: true,
            data: { koder: koderCreated },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message,
        });
    }
});

// GET /Koders/:id
router.get('/:id', auth,  async (request, response) => {
    try {
        const { id } = request.params;
        const koder = await koderUseCase.getById(id);
        response.json({
            success: true,
            data: { koder },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message,
        });
    }
});

// DELETE /koders/:id
router.delete('/:id', auth,  async (request, response) => {
    try {
        const { id } = request.params;
        const koderDeleted = await koderUseCase.deleteById(id);
        response.json({
            success: true,
            data: { koder: koderDeleted },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message,
        });
    }
});

// PATCH /koders/:id
router.patch('/:id', auth,  async (request, response) => {
    try {
        const { id } = request.params;
        const koderUpdated = await koderUseCase.updateById(id, request.body);
        response.json({
            success: true,
            data: { koder: koderUpdated },
        });
    } catch (error) {
        response.status(error.status || 500).json({
            success: false,
            error: error.message,
        });
    }
});

module.exports = router;

