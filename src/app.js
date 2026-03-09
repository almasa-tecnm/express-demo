// src/app.js

// Importa Express (framework del servidor)
const express = require("express");

// Importa Morgan (middleware de logging)
const morgan = require("morgan");

// Importa routers (rutas organizadas)
const indexRoutes = require("./routes/indexRoutes");
const healthRoutes = require("./routes/healthRoutes");

// Importa middlewares de error
const { notFound } = require("./middlewares/notFound");
const { errorHandler } = require("./middlewares/errorHandler");

// Importa configuración (PORT)
const { PORT } = require("./config/env");

// Crea la aplicación Express
const app = express();

// Middleware para que Express pueda leer JSON en el body de requests (POST/PUT)
app.use(express.json());

// Middleware para logging de todas las peticiones
app.use(morgan("dev"));

// Monta las rutas
app.use("/", indexRoutes);
app.use("/", healthRoutes);

// Middleware 404 (va después de rutas)
app.use(notFound);

// Middleware 500 (va al final)
app.use(errorHandler);

// Inicia el servidor
// En Docker, conviene escuchar en 0.0.0.0 para aceptar conexiones externas del contenedor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});