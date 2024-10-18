// api/index.js
const express = require('express');
const app = express();

// Middleware y rutas de tu aplicación
app.get('/', (req, res) => {
    res.send('¡Aplicación Express desplegada en Vercel!');
});

// Exportar la app como un handler para serverless
module.exports = app;
