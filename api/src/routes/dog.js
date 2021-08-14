const router = require('express').Router();

const {postDog} = require('../controllers/postDog')

router.post('/', postDog);     //<- funciona correctamente.. Ok

module.exports = router;