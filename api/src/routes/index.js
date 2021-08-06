const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const DogRoutes = require('./dog.js');
const TemperamentRoutes = require('./temperament.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', DogRoutes);
router.use('/temperament', TemperamentRoutes);

module.exports = router;
