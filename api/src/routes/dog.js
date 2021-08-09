const router = require('express').Router();

const { getAllDogs } = require('../controllers/getAllDogs');
const { postDog } = require('../controllers/postDog');

router.get('/', getAllDogs);
router.post('/', postDog);

module.exports = router;

/* 
router.get('/', (req, res) => {
	res.send('hola estoy en la ruta principal de Dogs / ...');
});
 */

/*
router.get('/', async function(req, res){
  // Modificar para renderizar todas los usuarios que se encuentren
  // dento de la base de datos
  // Tu código acá:

  try {
    const users = await User.findAll()
    res.render('users', {users})
  } catch (error) {
    next(error)
  }

});

router.get('/:id', async function(req, res, next){
  // Modificar para renderizar los datos del usuario seleccionado
  // Tu código acá:

  try {
    const user = await User.findByPk(parseInt(req.params.id), {include: [Page]})
    return user ?
      res.render('unUsuarioEnParticular', {user}) :
      res.status(404).render('error')
  } catch (error) {
    next(error)
  }

});
*/
