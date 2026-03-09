// src/middlewares/errorHandler.js

// Middleware de error (firma especial con 4 parámetros: err, req, res, next)
function errorHandler(err, req, res, next) {
  // Imprime el error en consola para depuración
  console.error("Error:", err);

  // Responde con formato consistente
  res.status(500).json({
    ok: false,
    error: "Error interno del servidor"
  });
}

module.exports = { errorHandler };