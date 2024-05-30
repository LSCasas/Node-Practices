const express = require('express');
const router = express.Router();

// Define las rutas para 'mentors'
router.get('/', (req, res) => {
    res.json({ message: 'List of mentors' });
});

module.exports = router;
