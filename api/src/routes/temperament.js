const router = require('express').Router();

const {getTempInfo} = require('../controllers/getTempInfo')

router.get('/', getTempInfo);     //<- funciona correctamente.. Ok

module.exports = router;
