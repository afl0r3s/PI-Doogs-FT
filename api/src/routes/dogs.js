const router = require('express').Router();

const { getAllDogs } = require('../controllers/getAllDogs');
const { getDetailDog } = require('../controllers/getDetailDog')

router.get('/', getAllDogs);
router.get('/:idRaza', getDetailDog);

module.exports = router;