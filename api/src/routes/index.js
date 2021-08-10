const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const DogsRoutes = require('./dog.js');
const TemperamentRoutes = require('./temperament.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', DogsRoutes);               //Terminado.. Ok
router.use('/temperament', TemperamentRoutes); //Terminado.. Ok
router.use('/dog', DogsRoutes);

module.exports = router;
