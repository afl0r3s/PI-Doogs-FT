const router = require('express').Router();
const { getAllInfo, addTemperament } = require('../controllers/temperament');

const {getTempInfo} = require('../controllers/getTempInfo')

//router.get('/', getAllInfo);
router.get('/', getTempInfo);     //<- funciona parcialmente, falta convertir en array de temperamentos y guardar en la BD
router.post('/', addTemperament); //<- funciona parcilamnete, adiciona temperamento a la BD y nada mas

module.exports = router;
