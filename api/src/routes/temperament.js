const router = require('express').Router();

router.get('/', (req,res)=> {
    res.send('hola estoy en la ruta principal de Temperament / ...');
})

module.exports = router;
