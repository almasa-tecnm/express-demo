// src/middlewares/notFound.js

// Middleware 404: se ejecuta cuando ninguna ruta anterior coincidió
function notFound(req, res, next) {
  res.status(404).json({
    ok: false,                 // Bandera de falla
    error: "Ruta no encontrada", // Mensaje claro
    path: req.originalUrl      // Ruta que el cliente pidió
  });
}

// Exporta el middleware
module.exports = { notFound };