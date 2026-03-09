// src/config/env.js

// Importa la librería dotenv, que lee el archivo .env
const dotenv = require("dotenv");

// Ejecuta dotenv para cargar las variables de .env en process.env
dotenv.config();

// Lee el puerto desde variables de entorno.
// Si PORT no existe, usa 3000 como valor por defecto.
const PORT = process.env.PORT || 3000;

// Exporta PORT para usarlo en otros archivos (como app.js)
module.exports = { PORT };