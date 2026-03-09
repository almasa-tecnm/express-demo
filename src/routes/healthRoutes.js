// src/routes/healthRoutes.js

const express = require("express");
const router = express.Router();

// Importa el controlador health desde controllers
const { health } = require("../controllers/healthController");

// Endpoint GET /health
// En lugar de escribir la lógica aquí, delega al controlador
router.get("/health", health);

module.exports = router;