// src/routes/indexRoutes.js

// Importa express para usar Router
const express = require("express");

// Crea un router (grupo de rutas)
const router = express.Router();

// Endpoint GET /
// req: petición del cliente
// res: respuesta del servidor
router.get("/", (req, res) => {
  // Responde texto simple para comprobar que el servidor corre
  res.status(200).send("API Express funcionando");
});

// Exporta el router para montarlo en app.js
module.exports = router;