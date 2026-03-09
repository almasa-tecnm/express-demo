// src/controllers/healthController.js

// Controlador: función que atiende una petición y construye una respuesta
function health(req, res) {
  // Responde 200 OK y regresa un JSON con información útil del estado del servidor
  res.status(200).json({
    status: "ok",          // Indica que el servicio está funcionando
    uptime: process.uptime(), // Tiempo (segundos) que lleva corriendo Node
    timestamp: Date.now()  // Momento actual en milisegundos
  });
}

// Exporta la función para que la ruta /health la pueda usar
module.exports = { health };