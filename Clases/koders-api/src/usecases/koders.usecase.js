const createError = require("http-errors");
const Koders = require("../models/koders.model");
const encrypt = require("../lib/encrypt");


async function create(koderData) {
    // Verificar si el correo electrónico ya está en uso
    const koderFound = await Koders.findOne({ email: koderData.email });
    if (koderFound) {
        throw createError(409, "Email already in use");
    }
    



    
    // Encriptar la contraseña antes de guardar
    koderData.password = await encrypt.encrypt(koderData.password);

    // Crear el nuevo Koder en la base de datos
    const newKoder = await Koders.create(koderData);
    return newKoder;
}

async function getAll() {
    // Obtener todos los Koders y poblar el campo "generation"
    const allKoders = await Koders.find().populate("generation");
    return allKoders;
}

async function getById(id) {
    // Obtener un Koder por su ID y poblar el campo "generation"
    const koder = await Koders.findById(id).populate("generation");
    if (!koder) {
        throw createError(404, "Koder not found");
    }
    return koder;
}

async function deleteById(id) {
    // Eliminar un Koder por su ID
    const koderDeleted = await Koders.findByIdAndDelete(id);
    if (!koderDeleted) {
        throw createError(404, "Koder not found");
    }
    return koderDeleted;
}

async function updateById(id, newKoderData) {
    // Actualizar un Koder por su ID
    const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, {
        new: true,
        runValidators: true, // Asegurar que las validaciones del modelo se ejecuten
    });
    if (!updatedKoder) {
        throw createError(404, "Koder not found");
    }
    return updatedKoder;
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
};

